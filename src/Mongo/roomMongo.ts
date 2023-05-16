import { getMongoDb } from "../utils/mongo-connection";
import { RoomType } from "../@types/roomTypes";
import { roomModel } from "../models/roomModel";

export async function getAllRooms() {
  let connection;

  try {
    connection = getMongoDb();
    const getAllRooms = roomModel.find({});
    return getAllRooms;
  } catch (err) {
    return err;
  } finally {
    if (connection) {
      (await connection).disconnect();
    }
  }
}
