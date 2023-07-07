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
exports.updateRoom = exports.deleteRoom = exports.createRoom = exports.getRoom = exports.getAllRooms = void 0;
const roomModel_1 = require("./models/roomModel");
function getAllRooms() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getAllRooms = yield roomModel_1.roomModel.find();
            return getAllRooms;
        }
        catch (err) {
            return err;
        }
    });
}
exports.getAllRooms = getAllRooms;
//check if findByid works if not findOne
function getRoom(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getRoom = yield roomModel_1.roomModel.find({ id: id });
            return getRoom[0];
        }
        catch (err) {
            return err;
        }
    });
}
exports.getRoom = getRoom;
function createRoom(room) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createRoom = yield roomModel_1.roomModel.create(room);
            return createRoom;
        }
        catch (err) {
            return err;
        }
    });
}
exports.createRoom = createRoom;
function deleteRoom(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleteRoom = yield roomModel_1.roomModel.deleteOne({ id: id });
            return deleteRoom;
        }
        catch (err) {
            return err;
        }
    });
}
exports.deleteRoom = deleteRoom;
function updateRoom(roomId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateRoom = yield roomModel_1.roomModel.findOneAndUpdate({ id: roomId }, updates, {
                new: true,
            });
            return updateRoom;
        }
        catch (err) {
            return err;
        }
    });
}
exports.updateRoom = updateRoom;
