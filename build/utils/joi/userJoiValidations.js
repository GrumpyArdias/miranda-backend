"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userCreateSchema = joi_1.default.object({
    fullName: joi_1.default.string().required().min(3).max(50),
    email: joi_1.default.string()
        .required()
        .email()
        .pattern(new RegExp("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")),
    joinDate: joi_1.default.string().isoDate().required(),
    jobTitle: joi_1.default.string().required().min(3).max(50),
    estatus: joi_1.default.boolean().required(),
    number: joi_1.default.string()
        .required()
        .min(8)
        .max(11)
        .pattern(new RegExp("^[0-9]+$")),
    password: joi_1.default.string().required(),
});
