import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL)
    console.log("MongoDB Connected: ", conn.connection.host);
  } catch (error) {
    console.log("Error:", error);
    process.exit();
  }
};

export default connectDB;
