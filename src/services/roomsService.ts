import {
  getAllRooms as getAllRoomsDB,
  getOneRoom as getOneRoomDB,
  createRoom as createRoomDB,
  deleteRoom as deleteRoomDB,
  updateRoom as updateRoomDB,
} from "../db/roomsDb";

import { RoomType } from "../@types/roomTypes";

export const getAllRooms = async () => {
  const getAllRooms = await getAllRoomsDB();
  return getAllRooms;
};

export const getOneRoom = async (roomId: string) => {
  const room = await getOneRoomDB(roomId);

  return room;
};

export const createRoom = async (newRoom: RoomType) => {
  const createdRoom = await createRoomDB(newRoom);

  return createdRoom;
};

export const deleteRoom = async (roomId: string) => {
  const deleteRoom = await deleteRoomDB(roomId);
  return deleteRoom;
};

export const updateRoom = async (roomId: string, newRoom: RoomType) => {
  const updatedRoom = await updateRoomDB(roomId, newRoom);

  return updatedRoom;
};
