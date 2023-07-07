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
exports.updateComment = exports.deleteComment = exports.createComment = exports.getComment = exports.getAllComments = void 0;
const sql_conection_1 = require("../utils/sql-conection");
function getAllComments() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const getAllComments = yield connection.query("SELECT * FROM comments");
            return getAllComments;
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
exports.getAllComments = getAllComments;
function getComment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const getComment = yield connection.execute("SELECT * FROM comments WHERE id = ?", [id]);
            return getComment;
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
exports.getComment = getComment;
function createComment(comment) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const createComment = yield connection.execute("INSERT INTO comments SET ?", [comment]);
            return createComment;
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
exports.createComment = createComment;
function deleteComment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const deleteComment = yield connection.execute("DELETE FROM comments WHERE id = ?", [id]);
            return deleteComment;
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
exports.deleteComment = deleteComment;
function updateComment(commentId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, sql_conection_1.getSQLDb)();
            const updateComment = yield connection.execute("UPDATE comments SET ? WHERE id = ?", [updates, commentId]);
            return updateComment;
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
exports.updateComment = updateComment;
