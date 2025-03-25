import mongoose, { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        
    },
    CoverPic: {
        type: String,
        
    },
    company: {
        type: String,
        
    },
    resetToken: String,
    expireToken: Date
    })


    // export default  mongoose.models.User ||  model('User', userSchema) ;
    const User = models.User || model("User", userSchema);

export default User;