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
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const sql_conection_1 = require("../utils/sql-conection");
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const getAllUsers = yield connection.execute("SELECT * FROM users");
            return getAllUsers;
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
exports.getAllUsers = getAllUsers;
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const getUser = yield connection.execute("SELECT * FROM users WHERE id = ?", [id]);
            return getUser;
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
exports.getUser = getUser;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const createUser = yield connection.execute("INSERT INTO users SET ?", [
                user,
            ]);
            return createUser;
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
exports.createUser = createUser;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const deleteUser = yield connection.execute("DELETE FROM users WHERE id = ?", [id]);
            return deleteUser;
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
exports.deleteUser = deleteUser;
function updateUser(userId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const updateUser = yield connection.execute("UPDATE users SET ? WHERE id = ?", [updates, userId]);
            return updateUser;
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
exports.updateUser = updateUser;
