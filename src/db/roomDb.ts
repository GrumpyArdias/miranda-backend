import Rooms from "../data/rooms.json";
import { RoomType } from "../@types/roomTypes";
import fs from "fs";

export const getAllRooms = () => {
  return Rooms;
};

export const getOneRoom = (roomId: string) => {
  const theRoom = Rooms.find((room) => {
    return room.id === roomId.replace(/"/g, "");
  });

  return theRoom;
};

export const createRoom = async (newRoom: RoomType) => {
  const result = await fs.writeFileSync(
    "src/data/rooms.json",
    JSON.stringify([...Rooms, newRoom], null, 2)
  );
  return result;
};

export const deleteRoom = (roomId: string) => {
  const deledteRoom = Rooms.filter(
    (room) => room.id !== roomId.replace(/"/g, "")
  );
  fs.writeFileSync("src/data/rooms.json", JSON.stringify(deledteRoom, null, 2));
  return deledteRoom;
};
