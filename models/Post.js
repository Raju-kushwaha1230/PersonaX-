import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    caption:{type:String,max:500},
    media: [{ type: mongoose.Schema.Types.ObjectId, ref: "Upload" }],
    createdAt:{type:"Date",default:Date.now},
   
})

const Post = mongoose.models.Post || mongoose.model("Post",postSchema);
export default Post;
