import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
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
  bio: { type: String, default: "" },
  location: { type: String, default: "" },
  website: { type: String, default: "" },
  portfolio: { type: String, default: "" },
  skills: { type: [String], default: [] },
  joinedDate: { type: Date, default: Date.now },
    followers: { type: [String], default: [] },
    following: { type: [String], default: [] },
    about: { type: String, default: "" },

  resetToken: String,
  expireToken: Date,
});

// export default  mongoose.models.User ||  model('User', userSchema) ;
const User = models.User || model("User", userSchema);

export default User;
