"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomCreateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.roomCreateSchema = joi_1.default.object({
    id: joi_1.default.string(),
    bedType: joi_1.default.string().required().min(4).max(15),
    estatus: joi_1.default.boolean().required(),
    facilities: joi_1.default.array().items(joi_1.default.string()).required(),
    price: joi_1.default.number().required().min(1),
    discount: joi_1.default.number().required().min(0).max(100),
    doorNumber: joi_1.default.number().required().min(1).max(4),
    floorNumber: joi_1.default.number().required().min(1).max(20),
});
