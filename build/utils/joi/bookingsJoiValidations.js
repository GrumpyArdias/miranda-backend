"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingCreateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.bookingCreateSchema = joi_1.default.object({
    id: joi_1.default.string(),
    fullName: joi_1.default.string().required().min(3).max(50),
    bookingDate: joi_1.default.string().isoDate().required(),
    checkIn: joi_1.default.string().isoDate().required(),
    checkOut: joi_1.default.string().isoDate().required(),
    specialRquest: joi_1.default.string(),
    roomType: joi_1.default.string().required().min(3).max(50),
    roomId: joi_1.default.string().required(),
    status: joi_1.default.string().required(),
});
