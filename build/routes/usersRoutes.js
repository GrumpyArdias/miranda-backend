"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const usersController_1 = require("../controllers/usersController");
router.get("/", usersController_1.getAllUsers);
router.get("/:id", usersController_1.getOneUser);
router.post("/", usersController_1.createUser);
router.delete("/:id", usersController_1.deleteUser);
router.put("/:id", usersController_1.updateUser);
exports.default = router;
