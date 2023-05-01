import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/usersController";

router.get("/getAllUsers", getAllUsers);
router.get("/getOneUser/:id", getOneUser);
router.post("/createUser", createUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

export default router;
