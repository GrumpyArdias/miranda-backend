import express from "express";
import {
  getAllRooms as getAllRoomsService,
  getOneRoom as getOneRoomService,
  createRoom as createRoomService,
  deleteRoom as deleteRoomService,
  updateRoom as updateRoomService,
} from "../services/roomsService";
import { v4 as uuid } from "uuid";
import {
  ValidateRoomType,
  validateRoomParams,
} from "../utils/roomsValidations";

export const getAllRooms = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const getAllRooms = await getAllRoomsService();
    return res.send({ status: "Success", data: getAllRooms });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const getOneRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const room = await getOneRoomService(req.params.id);
    if (!room) {
      return res.send({ status: "Error", data: "Room not found" });
    }
    return res.send({ status: "Success", data: room });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const createRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newRoom = req.body;
    const requiredParams = [
      "bedType",
      "status",
      "facilites",
      "price",
      "discount",
      "doorNumber",
      "floorNumber",
    ];
    const missingParams = requiredParams.filter(
      (param) => !req.body.hasOwnProperty(param)
    );
    if (missingParams.length > 0) {
      return res.send({
        status: "Error",
        message: `Missing required parameters: ${missingParams.join(", ")}`,
      });
    }

    if (!ValidateRoomType(req.body)) {
      return res.send({
        status: "Error",
        message: "Invalid room parameter types",
      });
    }

    const room = {
      ...newRoom,
      id: uuid(),
      bedType: newRoom.bedType,
      status: newRoom.status,
      facilites: newRoom.facilites,
      price: newRoom.price,
      discount: newRoom.discount,
      doorNumber: newRoom.doorNumber,
      floorNumber: newRoom.floorNumber,
    };
    const cretedRoom = await createRoomService(room);
    return res.send({ status: "Success", data: cretedRoom });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const deleteRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deleteRoom = await deleteRoomService(req.params.id);
    if (deleteRoom.length === 0) {
      res.send({ status: "Error", data: "Room not found" });
    }
    console.log(deleteRoom);
    return res.send({ status: "Success", data: deleteRoom });
  } catch (error) {
    return res.send({ status: "Room not found", data: error });
  }
};

export const updateRoom = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    validateRoomParams(req.body);

    const updateRoom = await updateRoomService(req.params.id, req.body);

    if (updateRoom instanceof Error) {
      return res.send({ status: "Error", message: updateRoom.message });
    }

    return res.send({ status: "Success", data: updateRoom });
  } catch (error) {
    return res.send({ status: "Room not found", data: error });
  }
};
