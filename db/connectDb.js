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

const MONGO_URI = process.env.MONGODB_URI; // Use environment variable

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true, // This is optional but still useful
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;


