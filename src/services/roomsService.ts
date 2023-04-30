import {
  getAllRooms as getAllRoomsDB,
  getOneRoom as getOneRoomDB,
  createRoom as createRoomDB,
  deleteRoom as deleteRoomDB,
} from "../db/roomDb";
import { uuid } from "uuidv4";

import { RoomType } from "../@types/roomTypes";

export const getAllRooms = () => {
  const getAllRooms = getAllRoomsDB();
  return getAllRooms;
};

export const getOneRoom = async (roomId: string) => {
  const room = await getOneRoomDB(roomId);

  return room;
};

export async function createRoom(newRoom: RoomType) {
  const room = {
    ...newRoom,
    id: uuid(),
    bedType: newRoom.bedType,
    status: newRoom.status,
    facilities: newRoom.facilites,
    price: newRoom.price,
    discount: newRoom.discount,
    doorNumber: newRoom.doorNumber,
    floorNumber: newRoom.floorNumber,
  };

  const createdRoom = await createRoomDB(room);
  return createdRoom;
}
export const deleteRoom = (roomId: string) => {
  const deleteRoom = deleteRoomDB(roomId);
  console.log("this is the delete room in the service", deleteRoom);
  return deleteRoom;
};
