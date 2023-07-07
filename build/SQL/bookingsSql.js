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
exports.updateBooking = exports.deleteBooking = exports.createBooking = exports.getBooking = exports.getAllBookings = void 0;
const sql_conection_1 = require("../utils/sql-conection");
//Revisar
function getAllBookings() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const getAllBookings = yield connection.execute(`
      SELECT bookings.*, rooms.roomType 
      FROM bookings
      JOIN rooms
      ON bookings.roomId = rooms.id
    `);
            return getAllBookings;
        }
        catch (error) {
            console.error("Error fetching all bookings:", error);
            throw new Error("Failed to fetch all bookings");
        }
        finally {
            if (connection) {
                yield connection.end();
            }
        }
    });
}
exports.getAllBookings = getAllBookings;
function getBooking(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const getBooking = yield connection.execute("SELECT * FROM bookings WHERE id = ?", [id]);
            return getBooking;
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
exports.getBooking = getBooking;
//TODO THIS IS NOT WORKING YET
function createBooking(booking) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const createBooking = yield connection.execute("INSERT INTO bookings SET ?", [booking]);
            return createBooking;
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
exports.createBooking = createBooking;
function deleteBooking(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const deleteBooking = yield connection.execute("DELETE FROM bookings WHERE id = ?", [id]);
            return deleteBooking;
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
exports.deleteBooking = deleteBooking;
function updateBooking(bookingId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const updateBooking = yield connection.execute("UPDATE bookings SET ? WHERE id = ?", [updates, bookingId]);
            return updateBooking;
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
exports.updateBooking = updateBooking;
