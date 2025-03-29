import connectDB from "@/db/connectDb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await connectDB();
  try {
    // Extract username from URL
    const { username } = params; // Get username from URL params
    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }
    const  { bio, location, website, portfolio, skills } = await req.json();
    console.log(
      "recieved body",
      username,
      bio,
      location,
      website,
      portfolio,
      skills
    );
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }
    const updateUser = await User.findOneAndUpdate(
      { username },
      { $set: { bio, location, website, portfolio, skills } },
      { new: true}
    );  
    return NextResponse.json(
      { success: true, user: updateUser },
      { status: 200 }
    );
  } catch (error) {
    console.log("error in creating post", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
