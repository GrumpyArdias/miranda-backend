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
const sql_conection_1 = require("../utils/sql-conection");
function getAllRooms() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const getAllRooms = yield connection.execute("SELECT * FROM rooms");
            return getAllRooms;
        }
        catch (err) {
            return err;
        }
        finally {
            if (connection) {
                yield connection.end();
            }
        }
    });
}
exports.getAllRooms = getAllRooms;
function getRoom(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const getRoom = yield connection.execute("SELECT * FROM rooms WHERE id = ?", [id]);
            return getRoom;
        }
        catch (err) {
            return err;
        }
        finally {
            if (connection) {
                yield connection.end();
            }
        }
    });
}
exports.getRoom = getRoom;
function createRoom(room) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const createRoom = yield connection.execute("INSERT INTO rooms SET ?", [
                room,
            ]);
            return createRoom;
        }
        catch (err) {
            return err;
        }
        finally {
            if (connection) {
                yield connection.end();
            }
        }
    });
}
exports.createRoom = createRoom;
function deleteRoom(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const deleteRoom = yield connection.execute("DELETE FROM rooms WHERE id = ?", [id]);
            return deleteRoom;
        }
        catch (err) {
            return err;
        }
        finally {
            if (connection) {
                yield connection.end();
            }
        }
    });
}
exports.deleteRoom = deleteRoom;
function updateRoom(roomId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const updateRoom = yield connection.execute("UPDATE rooms SET ? WHERE id = ?", [updates, roomId]);
            return updateRoom;
        }
        catch (err) {
            return err;
        }
        finally {
            if (connection) {
                yield connection.end();
            }
        }
    });
}
exports.updateRoom = updateRoom;
