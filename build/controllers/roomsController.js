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
exports.deleteRoom = exports.createRoom = exports.getOneRoom = exports.getAllRooms = void 0;
const roomsService_1 = require("../services/roomsService");
const getAllRooms = (_req, res) => {
    const getAllRooms = (0, roomsService_1.getAllRoomsService)();
    return res.send({ status: "Success", data: getAllRooms });
};
exports.getAllRooms = getAllRooms;
const getOneRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, roomsService_1.getOneRoomService)(req.params.id);
        return res.send({ status: "Success", data: room });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getOneRoom = getOneRoom;
const createRoom = (req, res) => {
    try {
        const room = (0, roomsService_1.createRoom)(req.body);
        return res.send({ status: "Success", data: room });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
};
exports.createRoom = createRoom;
const deleteRoom = (_req, res) => {
    const deleteRoom = (0, roomsService_1.deleteRoomService)();
    return res.send(`Delete Room ${deleteRoom}`);
};
exports.deleteRoom = deleteRoom;
