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
exports.updateRoom = exports.deleteRoom = exports.createRoom = exports.getOneRoom = exports.getAllRooms = void 0;
const roomsService_1 = require("../services/roomsService");
const uuid_1 = require("uuid");
const roomsJoiValidations_1 = require("../utils/joi/roomsJoiValidations");
const roomsValidations_1 = require("../utils/roomsValidations");
const getAllRooms = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllRooms = yield (0, roomsService_1.getAllRooms)();
        return res.send({ status: "Success", data: getAllRooms });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getAllRooms = getAllRooms;
const getOneRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, roomsService_1.getOneRoom)(req.params.id);
        if (!room) {
            return res.send({ status: "Error", data: "Room not found" });
        }
        console.log(room);
        return res.send({ status: "Success", data: room });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getOneRoom = getOneRoom;
const createRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const newRoom = req.body;
        const validateRoom = yield roomsJoiValidations_1.roomCreateSchema.validateAsync(newRoom);
        console.log("this is the validateRoom", validateRoom);
        const room = Object.assign(Object.assign({}, validateRoom), { id: (0, uuid_1.v4)() });
        console.log("This is the room", room);
        const cretedRoom = yield (0, roomsService_1.createRoom)(room);
        console.log("this is the created Room", cretedRoom);
        return res.send({ status: "Success", data: cretedRoom });
    }
    catch (error) {
        console.log(error);
        return res.send({ status: "Error", data: error });
    }
});
exports.createRoom = createRoom;
const deleteRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteRoom = yield (0, roomsService_1.deleteRoom)(req.params.id);
        return res.send({ status: "Success", data: deleteRoom });
    }
    catch (error) {
        return res.send({ status: "Room not found", data: error });
    }
});
exports.deleteRoom = deleteRoom;
const updateRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, roomsValidations_1.validateRoomParams)(req.body);
        const updateRoom = yield (0, roomsService_1.updateRoom)(req.params.id, req.body);
        return res.send({ status: "Success", data: updateRoom });
    }
    catch (error) {
        return res.send({ status: "Room not found", data: error });
    }
});
exports.updateRoom = updateRoom;
