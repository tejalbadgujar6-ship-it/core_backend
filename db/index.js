import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected !!"); // ✅ FIX
  } catch (error) {
    console.log("MONGODB connection error", error); // ✅ FIX
    process.exit(1);
  }
};

export default connectDB;
