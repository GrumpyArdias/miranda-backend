"use strict";
// import {
//   getAllRooms as getAllRoomsDB,
//   getOneRoom as getOneRoomDB,
//   createRoom as createRoomDB,
//   deleteRoom as deleteRoomDB,
//   updateRoom as updateRoomDB,
// } from "../db/roomsDb";
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
// import {
//   getAllRooms as getAllRoomsSql,
//   getRoom as getRoomSql,
//   createRoom as createRoomSql,
//   deleteRoom as deleteRoomSql,
//   updateRoom as updateRoomSql,
// } from "../SQL/roomSql";
const roomMongo_1 = require("../Mongo/roomMongo");
const getAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    //const getAllRooms = await getAllRoomsDB();
    // const getAllRooms = await getAllRoomsSql();
    const getAllRooms = yield (0, roomMongo_1.getAllRooms)();
    return getAllRooms;
});
exports.getAllRooms = getAllRooms;
const getOneRoom = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    //const room = await getRoomSql(roomId);
    //  const room = await getOneRoomDB(roomId);
    const room = yield (0, roomMongo_1.getRoom)(roomId);
    return room;
});
exports.getOneRoom = getOneRoom;
const createRoom = (newRoom) => __awaiter(void 0, void 0, void 0, function* () {
    //const createdRoom = await createRoomDB(newRoom);
    //const createdRoom = await createRoomSql(newRoom);
    const createdRoom = yield (0, roomMongo_1.createRoom)(newRoom);
    return createdRoom;
});
exports.createRoom = createRoom;
const deleteRoom = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    // const deleteRoom = await deleteRoomDB(roomId);
    //const deleteRoom = await deleteRoomSql(roomId);
    const deleteRoom = yield (0, roomMongo_1.deleteRoom)(roomId);
    return deleteRoom;
});
exports.deleteRoom = deleteRoom;
const updateRoom = (roomId, newRoom) => __awaiter(void 0, void 0, void 0, function* () {
    //  const updatedRoom = await updateRoomDB(roomId, newRoom);
    //const updatedRoom = await updateRoomSql(roomId, newRoom);
    const updatedRoom = yield (0, roomMongo_1.updateRoom)(roomId, newRoom);
    return updatedRoom;
});
exports.updateRoom = updateRoom;
