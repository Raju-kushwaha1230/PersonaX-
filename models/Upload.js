import mongoose from "mongoose";

const UploadSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    fileUrl:{type:String,required:true},
    fileType:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
})

export default mongoose.models.Upload || mongoose.model("Upload",UploadSchema);
