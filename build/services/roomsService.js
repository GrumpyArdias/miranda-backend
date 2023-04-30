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
exports.deleteRoomService = exports.createRoom = exports.getOneRoomService = exports.getAllRoomsService = void 0;
const roomDb_1 = require("../db/roomDb");
const getAllRoomsService = () => {
    const getAllRooms = (0, roomDb_1.getAllRooms)();
    return getAllRooms;
};
exports.getAllRoomsService = getAllRoomsService;
const getOneRoomService = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    const room = yield (0, roomDb_1.getOneRoom)(roomId);
    return room;
});
exports.getOneRoomService = getOneRoomService;
function createRoom(newRoom) {
    return __awaiter(this, void 0, void 0, function* () {
        const room = Object.assign(Object.assign({}, newRoom), { id: newRoom.id, bedType: newRoom.bedType, status: newRoom.status, facilities: newRoom.facilites, price: newRoom.price, discount: newRoom.discount, doorNumber: newRoom.doorNumber, floorNumber: newRoom.floorNumber });
        const createdRoom = yield (0, roomDb_1.createRoom)(room);
        return createdRoom;
    });
}
exports.createRoom = createRoom;
const deleteRoomService = () => {
    return;
};
exports.deleteRoomService = deleteRoomService;
