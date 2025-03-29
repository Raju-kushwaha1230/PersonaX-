import { NextResponse } from "next/server";
import connectDB from "@/db/connectDb";
import Post from "@/models/Post";
import Upload from "@/models/Upload";

export async function POST(req){
    await connectDB()

    try{
        const body = await req.json(); 
        console.log("recieved body",body);

        const {userId,caption,mediaIds} = body;

        if(!userId || !caption){
            return NextResponse.json({error:"userid and caption required"},{status:400})
        }
        
        const newPost = new Post({
            userId,
            caption,
            media:mediaIds || []

        })
        await newPost.save();
        return NextResponse.json({ success:true, post:newPost },{ status:201 })

    }catch(error){
        console.log("error in creating post",error);
        return NextResponse.error({error:"Internal server error"},{status:500})
    }
}

export async function GET() {
    await connectDB();
    try{
        const posts = await Post.find()
        .populate("userId")
        .populate("media");

        return NextResponse.json({success:true, posts},{status:200})
    }catch(error){
        console.log((error));
        return NextResponse.json({ error:"internal server error"},{status:500})
    }
}
