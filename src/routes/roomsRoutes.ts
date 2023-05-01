import express from "express";
const router = express.Router();
import {
  getAllRooms,
  getOneRoom,
  createRoom,
  deleteRoom,
  updateRoom,
} from "../controllers/roomsController";

router.get("/getAllRooms", getAllRooms);
router.get("/getOneRoom/:id", getOneRoom);
router.post("/createRoom", createRoom);
router.delete("/deleteRoom/:id", deleteRoom);
router.put("/updateRoom/:id", updateRoom);

export default router;
