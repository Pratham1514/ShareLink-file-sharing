import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URL = `mongodb+srv://ShareLink:yA4L4sfRrFEAeMkh@cluster0.ysob3md.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Error while connecting with database", error.message);
  }
};

export default DBConnection;

// yA4L4sfRrFEAeMkhF
