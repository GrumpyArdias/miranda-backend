import { RoomType } from "../@types/roomTypes";
import { getSQLDb } from "../utils/sql-conection";

export async function getAllRooms() {
  try {
    const connection = await getSQLDb();
    const getAllRooms = await connection.execute("SELECT * FROM rooms");
    return getAllRooms;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getRoom(id: string) {
  try {
    const connection = await getSQLDb();
    const getRoom = await connection.execute(
      "SELECT * FROM rooms WHERE id = ?",
      [id]
    );
    return getRoom;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function createRoom(room: RoomType) {
  try {
    const connection = await getSQLDb();
    const createRoom = await connection.execute("INSERT INTO rooms SET ?", [
      room,
    ]);
    return createRoom;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function deleteRoom(id: string) {
  try {
    const connection = await getSQLDb();
    const deleteRoom = await connection.execute(
      "DELETE FROM rooms WHERE id = ?",
      [id]
    );
    return deleteRoom;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function updateRoom(roomId: string, updates: Partial<RoomType>) {
  try {
    const connection = await getSQLDb();
    const updateRoom = await connection.execute(
      "UPDATE rooms SET ? WHERE id = ?",
      [updates, roomId]
    );
    return updateRoom;
  } catch (err) {
    console.log(err);
    return err;
  }
}
