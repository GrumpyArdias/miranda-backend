"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsCreateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.commentsCreateSchema = joi_1.default.object({
    commentDate: joi_1.default.string().isoDate().required(),
    fullName: joi_1.default.string().required().min(3).max(50),
    email: joi_1.default.string()
        .required()
        .email()
        .pattern(new RegExp("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")),
    phone: joi_1.default.string().required().min(8).max(11).pattern(new RegExp("^[0-9]+$")),
    subject: joi_1.default.string().required().min(3).max(50),
    comment: joi_1.default.boolean().required(),
});
