"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const commentsController_1 = require("../controllers/commentsController");
router.get("/", commentsController_1.getAllComments);
router.get("/:id", commentsController_1.getOneComment);
router.post("/", commentsController_1.createComment);
router.delete("/:id", commentsController_1.deleteComment);
router.put("/:id", commentsController_1.updateComment);
exports.default = router;
