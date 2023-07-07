"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userlogin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.Userlogin = {
    email: "admin@admin.com",
    password: bcrypt_1.default.hashSync("password", 10),
};
