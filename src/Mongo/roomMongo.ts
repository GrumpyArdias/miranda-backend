import { getMongoDb } from "../utils/mongo-connection";
import { RoomType } from "../@types/roomTypes";
import { roomModel } from "../models/roomModel";

export async function getAllRooms() {
  let connection;

  try {
    console.log("this is the mongo connector");
    connection = await getMongoDb();
    const getAllRooms = await roomModel.find();
    console.log(getAllRooms);
    return getAllRooms;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

//check if findByid works if not findOne
export async function getRoom(id: string) {
  let connection;
  try {
    connection = await getMongoDb();
    const getRoom = await roomModel.findById(id);
    return getRoom;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function createRoom(room: RoomType) {
  let connection;
  try {
    console.log(room);
    connection = await getMongoDb();
    const createRoom = await roomModel.create(room);
    return createRoom;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function deleteRoom(id: string) {
  let connection;
  try {
    connection = await getMongoDb();
    const deleteRoom = await roomModel.deleteOne({ id: id });
    return deleteRoom;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function updateRoom(
  roomId: string,
  updates: Omit<Partial<RoomType>, "id">
) {
  let connection;
  try {
    connection = await getMongoDb();
    const updateRoom = await roomModel.findOneAndUpdate(
      { id: roomId },
      updates,
      {
        new: true,
      }
    );
    return updateRoom;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}
