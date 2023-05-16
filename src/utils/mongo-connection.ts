import mongoose from "mongoose";

// async function connectToDatabase() {
//   try {
//     const options = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       autoIndex: true,
//     } as mongoose.ConnectOptions;

//     await mongoose.connect("mongodb://127.0.0.1:27017/", options);
//     console.log("MongoDB connected successfully!");
//   } catch (err) {
//     console.error(`MongoDB connection error: ${err}`);
//   }
// }

// connectToDatabase();

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
} as mongoose.ConnectOptions;

export function getMongoDb() {
  return mongoose.connect("mongodb://127.0.0.1:27017/", config);
}

const mongoStatus = async () => {
  try {
    const connection = await getMongoDb();
    console.log("You have been connected to the Mongo DB");
    return connection;
  } catch (err) {
    console.log("Failed to connect to the MongoDB");
    return err;
  }
};

mongoStatus();
