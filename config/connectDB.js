import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  }

  mongoose.connect(process.env.MONGODB_URI, {}, (err) => {
    if (err) throw err;
    console.log("Connect to mongodb.");
  });
};

export default connectDB;
