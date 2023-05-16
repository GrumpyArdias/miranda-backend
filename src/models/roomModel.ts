import mongoose from "mongoose";
import { RoomType } from "../@types/roomTypes";
import { createRandomRoom } from "../seed/roomsSeeder";
import { getMongoDb } from "../utils/mongo-connection";

export const roomArr: RoomType[] = [];

const roomSchema = new mongoose.Schema<RoomType>({
  id: {
    type: String,
    unique: true,
  },
  bedType: {
    type: String,
    enum: ["single", "double", "double-superior", "suite"],
  },
  estatus: {
    type: Boolean,
  },
  facilities: {
    type: [String],
    enum: [
      "Wifi",
      "TV",
      "Kitchen",
      "Free parking",
      "Air conditioning",
      "Bathtub",
      "Coffee set",
    ],
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,

    min: 1,
    max: 100,
  },
  doorNumber: {
    type: Number,
    min: 1,
    max: 20,
  },
  floorNumber: {
    type: Number,
    min: 1,
    max: 5,
  },
});

export const roomModel = mongoose.model("Rooms", roomSchema);

export async function runRooms() {
  let connection;
  try {
    connection = await getMongoDb();

    for (let i = 1; i <= 20; i++) {
      roomArr.push(createRandomRoom());
    }

    const savedRooms = await roomModel
      .insertMany(roomArr)
      .then((savedRooms) => {
        console.log("Rooms saved:", savedRooms);
      })
      .catch((error) => {
        console.error("Error saving rooms:", error);
      });

    return savedRooms;
  } catch (err) {
    return err;
  } finally {
    connection?.disconnect();
  }
}
