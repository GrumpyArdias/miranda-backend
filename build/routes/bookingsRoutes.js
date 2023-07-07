"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bookingsController_1 = require("../controllers/bookingsController");
router.get("/", bookingsController_1.getAllBookings);
router.get("/:id", bookingsController_1.getOneBooking);
router.delete("/:id", bookingsController_1.deleteBooking);
router.post("/", bookingsController_1.createBooking);
router.put("/:id", bookingsController_1.updateBooking);
exports.default = router;
