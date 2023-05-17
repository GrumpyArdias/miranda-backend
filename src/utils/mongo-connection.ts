import dotenv from "dotenv";
import mongoose from "mongoose";
//import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI ?? "";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// }) as mongoose.ConnectOptions;

export function getMongoDb() {
  return mongoose.connect(uri);
}
const mongoStatus = async () => {
  try {
    const connection = await getMongoDb();
    console.log("You have been connected to the Mongo DB");
    return connection;
  } catch (err) {
    console.log("Failed to connect to the MongoDB", err);
    return err;
  }
};

mongoStatus();
