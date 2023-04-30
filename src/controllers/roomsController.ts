import express from "express";
import {
  getAllRooms as getAllRoomsService,
  getOneRoom as getOneRoomService,
  createRoom as createRoomService,
  deleteRoom as deleteRoomService,
} from "../services/roomsService";

export const getAllRooms = (_req: express.Request, res: express.Response) => {
  const getAllRooms = getAllRoomsService();
  return res.send({ status: "Success", data: getAllRooms });
};

export const getOneRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const room = await getOneRoomService(req.params.id);
    console.log(room);
    return res.send({ status: "Success", data: room });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const createRoom = (req: express.Request, res: express.Response) => {
  try {
    console.log("esto es el try createRoom");
    const room = createRoomService(req.body);
    return res.send({ status: "Success", data: room });
  } catch (error) {
    console.log("esto es el catch createRoom");
    return res.send({ status: "Error", data: error });
  }
};

export const deleteRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deleteRoom = await deleteRoomService(req.params.id);
    console.log(deleteRoom);
    return res.send({ status: "Success", data: deleteRoom });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};
