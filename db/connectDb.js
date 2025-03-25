// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(`mongodb://localhost:27017/Chai`, {
//         useNewUrlParser: true,
//       });
//       console.log(`MongoDB Connected: {conn.connection.host}`);
//     } catch (error) {
//       console.error(error.message);
//       process.exit(1);
//     }
//   }
  
//   export default connectDB;
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI; // Ensure this is set in your environment variables

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true, // Optional but helps with stability
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;



