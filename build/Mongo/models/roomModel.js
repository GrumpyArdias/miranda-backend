"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomModel = exports.roomArr = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.roomArr = [];
const roomSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        unique: true,
    },
    bedType: {
        type: String,
        enum: ["single", "double", "double-superior", "suite"],
    },
    estatus: {
        type: Boolean,
    },
    facilities: {
        type: [String],
        enum: [
            "Wifi",
            "TV",
            "Kitchen",
            "Free parking",
            "Air conditioning",
            "Bathtub",
            "Coffee set",
        ],
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        min: 1,
        max: 100,
    },
    doorNumber: {
        type: Number,
        min: 1,
        max: 20,
    },
    floorNumber: {
        type: Number,
        min: 1,
        max: 5,
    },
});
exports.roomModel = mongoose_1.default.model("Rooms", roomSchema);
