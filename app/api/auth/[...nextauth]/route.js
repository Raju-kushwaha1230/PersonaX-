import mongoose from "mongoose";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import connectDB from "@/db/connectDb";

export const authOption = NextAuth({
  providers: [
    //// OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github"  || account.provider == "google") {
        await connectDB();
        //find user in db
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
          //create user
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          })
          
        }  
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      
      if (dbUser) {
        session.user.name = dbUser.username;
        session.user.id = dbUser._id.toString(); // ✅ Attach userId
        session.user.username = dbUser.username; // Attach username


      }
      return session;
    },
  },
});

export { authOption as GET, authOption as POST };
