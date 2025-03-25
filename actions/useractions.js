"use server";

import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const fetchuser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username });
  let user = u.toObject({ flattenObjectID: true });
  return user;
};

export const updatProfile = async (data, oldusername) => {
  await connectDB();
  const ndata = Object.fromEntries(data);
  //if the username being updated , check if username available
  if (oldusername !== ndata.username) {
    let user = await User.findOne({ username: ndata.username });
    if (user) return { error: "Username already taken" };
  }
  await User.updateOne({ email: ndata.email }, ndata);
  return { success: "Profile updated successfully" };
};
