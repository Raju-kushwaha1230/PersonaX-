import cloudinary from "@/db/cloudary";
import connectDB from "@/db/connectDb";
import Upload from "@/models/Upload";
import { New_Amsterdam } from "next/font/google";
import { NextResponse } from "next/server";

cloudinary.config({  // ✅ Add this config
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
export async function POST(req) {
    await connectDB();

    try{
        const formData = await req.formData()
        for (const [key, value] of formData.entries()) {
            console.log(`FormData Key: ${key}, Value: ${value}`);
          }
          
        const file = formData.get( "file" )
        const userId =formData.get("userId")

        if(!file || !userId){
            return NextResponse.badRequest({message:"Please provide all the fields"})
        }
        console.log("Received file:", file);
        console.log("User ID:", userId);
    
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result = await new Promise((resolve,reject)=>{
            cloudinary.uploader.upload_stream({resource_type:"auto"},(error,result)=>{
                if(error){
                    reject(error)
                }
                else{
                    resolve(result)
                }

            }).end(buffer)
        });
        const newUpload = new Upload({
            user:userId,
            fileUrl:result.secure_url,
            fileType:result.resource_type,
        })
        await newUpload.save()
        return NextResponse.json({success:true,upload:newUpload},{status:201});


    }catch(error){
        console.log(error)
        return NextResponse.error({error:"Internal server error"},{status:500})
    }
}
