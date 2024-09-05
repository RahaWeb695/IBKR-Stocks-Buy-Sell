import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {})
    .then(() => {
      console.log(`MongoDB connected with server: ${mongoose.connection.host}`);
    })
    .catch((error) => {
      console.log(`Error connecting to mongoDB:`, error.message);
      process.exit(1);
    });
};

export default connectDatabase;
