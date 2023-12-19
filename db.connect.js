import mongoose from "mongoose";

const dbName = process.env.DB_NAME;
const dbPass = encodeURIComponent(process.env.DB_PASSWORD);
const dbUserName = process.env.DB_USERNAME;

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPass}@cluster0.bcrd4o0.mongodb.net/${dbName}?retryWrites=true&w=majority`
    );
    console.log("DB connection established");
  } catch (error) {
    console.log(error.message);
    console.log("DB connect failed.");
  }
};
