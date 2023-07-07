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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserbyMail = exports.getUser = exports.getAllUsers = void 0;
const userModel_1 = require("./models/userModel");
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getAllusers = yield userModel_1.userModel.find();
            return getAllusers;
        }
        catch (err) {
            return err;
        }
    });
}
exports.getAllUsers = getAllUsers;
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getUser = yield userModel_1.userModel.find({ id });
            return getUser[0];
        }
        catch (err) {
            return err;
        }
    });
}
exports.getUser = getUser;
function getUserbyMail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getUser = yield userModel_1.userModel.findOne({ email: email });
            if (getUser)
                return getUser;
            else
                throw new Error("Error returning user");
        }
        catch (err) {
            throw new Error("Error returning user");
        }
    });
}
exports.getUserbyMail = getUserbyMail;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createUser = yield userModel_1.userModel.create(user);
            return createUser;
        }
        catch (err) {
            return err;
        }
    });
}
exports.createUser = createUser;
function updateUser(userId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateUser = yield userModel_1.userModel.findOneAndUpdate({ id: userId }, updates, {
                new: true,
            });
            return updateUser;
        }
        catch (err) {
            return err;
        }
    });
}
exports.updateUser = updateUser;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleteUser = yield userModel_1.userModel.deleteOne({ id: id });
            return deleteUser;
        }
        catch (err) {
            return err;
        }
    });
}
exports.deleteUser = deleteUser;
