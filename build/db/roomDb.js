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
exports.createRoom = exports.getOneRoom = exports.getAllRooms = void 0;
const rooms_json_1 = __importDefault(require("../data/rooms.json"));
const getAllRooms = () => {
    return rooms_json_1.default;
};
exports.getAllRooms = getAllRooms;
const getOneRoom = (roomId) => {
    return rooms_json_1.default.find((room) => room.id === roomId);
};
exports.getOneRoom = getOneRoom;
const createRoom = (newRoom) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield rooms_json_1.default.push(newRoom);
    return result;
});
exports.createRoom = createRoom;
