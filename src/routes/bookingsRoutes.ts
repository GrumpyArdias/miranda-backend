import express from "express";

const router = express.Router();

import {
  getAllBookings,
  getOneBooking,
  deleteBooking,
  createBooking,
  updateBooking,
} from "../controllers/bookingsController";

router.get("/getAllBookings", getAllBookings);
router.get("/getOneBooking/:id", getOneBooking);
router.delete("/deleteBooking/:id", deleteBooking);
router.post("/createBooking", createBooking);
router.put("/updateBooking/:id", updateBooking);

export default router;
