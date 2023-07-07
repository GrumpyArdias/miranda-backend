"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingModel = exports.bookingSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.bookingSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        unique: true,
    },
    fullName: {
        type: String,
    },
    bookingDate: {
        type: String,
    },
    checkIn: {
        type: String,
    },
    checkOut: {
        type: String,
    },
    specialRquest: {
        type: String,
    },
    roomType: {
        type: String,
    },
    roomId: {
        type: String,
    },
    status: {
        type: String,
    },
});
exports.bookingModel = mongoose_1.default.model("Bookings", exports.bookingSchema);
