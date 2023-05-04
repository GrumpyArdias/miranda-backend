import express from "express";
import {
  getAllBookings as getAllBookingsService,
  getOneBooking as getOneBookingService,
  deleteBooking as deleteBookingService,
  updateBooking as updateBookingService,
  createBooking as createBookingService,
} from "../services/bookingsService";

import { v4 as uuid } from "uuid";
import {
  validateBookingParams,
  ValidateBookingType,
} from "../utils/bookingsValidations";

export const getAllBookings = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const getAllBookings = await getAllBookingsService();
    return res.send({ status: "Success", data: getAllBookings });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const getOneBooking = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const getOneBooking = await getOneBookingService(req.params.id);
    if (!getOneBooking) {
      return res.send({ status: "Error", data: "Booking not found" });
    }

    return res.send({ status: "Success", data: getOneBooking });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const deleteBooking = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deleteBooking = await deleteBookingService(req.params.id);
    if (deleteBooking.length === 0) {
      throw new Error("Booking not found");
    }
    return res.send({ status: "Success", data: deleteBooking });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const updateBooking = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    validateBookingParams(req.body);

    const updateBooking = await updateBookingService(req.params.id, req.body);

    if (updateBooking instanceof Error) {
      return res.send({ status: "Error", message: updateBooking.message });
    }

    return res.send({ status: "Success", data: updateBooking });
  } catch (error) {
    return res.send({ status: "Room not found", data: error });
  }
};

export const createBooking = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log("this is the create booking try");
    const newBooking = req.body;
    const requiredParams = [
      "fullName",
      "date",
      "checkIn",
      "checkOut",
      "specialRquest",
      "roomType",
      "roomId",
      "status",
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

    if (!ValidateBookingType(req.body)) {
      return res.send({
        status: "Error",
        message: "Invalid Booking parameter types",
      });
    }

    const room = {
      ...newBooking,
      id: uuid(),
      bedType: newBooking.bedType,
      status: newBooking.status,
      facilites: newBooking.facilites,
      price: newBooking.price,
      discount: newBooking.discount,
      doorNumber: newBooking.doorNumber,
      floorNumber: newBooking.floorNumber,
    };
    const cretedRoom = await createBookingService(room);
    return res.send({ status: "Success", data: cretedRoom });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};
