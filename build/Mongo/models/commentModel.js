"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commentSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        unique: true,
    },
    commentDate: {
        type: String,
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    subject: {
        type: String,
    },
    comment: {
        type: Boolean,
    },
    action: {
        type: Boolean,
    },
});
exports.commentModel = mongoose_1.default.model("Comments", commentSchema);
