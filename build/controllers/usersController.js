"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getOneUser = exports.getAllUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const usersService_1 = require("../services/usersService");
const usersValidations_1 = require("../utils/usersValidations");
const userJoiValidations_1 = require("../utils/joi/userJoiValidations");
const getAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield (0, usersService_1.getAllUsers)();
        return res.send({ status: "OK", data: allUsers });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getAllUsers = getAllUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, usersService_1.getOneUser)(req.params.id);
        if (!user) {
            return res.send({ status: "Error", data: "User not found" });
        }
        return res.send({ status: "Success", data: user });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getOneUser = getOneUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("This is the new user", req.body);
    try {
        const newUser = req.body;
        console.log("This is the new user", newUser);
        const validateUser = yield userJoiValidations_1.userCreateSchema.validateAsync(newUser);
        const user = Object.assign(Object.assign({}, validateUser), { id: (0, uuid_1.v4)(), fullName: newUser.fullName, email: newUser.email, joinDate: newUser.joinDate, description: newUser.description, estatus: newUser.estatus, number: newUser.number, password: bcrypt_1.default.hashSync(newUser.password, 10) });
        const createdUser = yield (0, usersService_1.createUser)(user);
        return res.send({ status: "Success", data: createdUser });
    }
    catch (error) {
        console.log("estamos entrando al catch", error);
        return res.send({ status: "Error", data: error });
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield (0, usersService_1.deleteUser)(req.params.id);
        if (exports.deleteUser.length === 0) {
            return res.send({ status: 404, data: "User not found" });
        }
        return res.send({ status: 204, data: deletedUser });
    }
    catch (error) {
        return res.send({ status: 404, data: "Invalid ID " });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, usersValidations_1.validateUserParams)(req.body);
        const updateUser = yield (0, usersService_1.updateUser)(req.params.id, req.body);
        if (updateUser instanceof Error) {
            return res.send({ status: "Error", message: updateUser.message });
        }
        return res.send({ status: "Success", data: updateUser });
    }
    catch (error) {
        return res.send({ status: "User not found", data: error });
    }
});
exports.updateUser = updateUser;
