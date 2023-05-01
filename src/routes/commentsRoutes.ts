import express from "express";
const router = express.Router();
import {
  getAllComments,
  getOneComment,
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/commentsController";

router.get("/getAllComments", getAllComments);
router.get("/getOneComment/:id", getOneComment);
router.post("/createComment", createComment);
router.delete("/deleteComment/:id", deleteComment);
router.put("/updateComment/:id", updateComment);

export default router;
