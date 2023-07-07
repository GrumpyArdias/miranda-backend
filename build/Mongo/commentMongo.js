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
exports.deleteComment = exports.updateComment = exports.createComment = exports.getComment = exports.getAllComments = void 0;
const commentModel_1 = require("./models/commentModel");
function getAllComments() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getAllComments = yield commentModel_1.commentModel.find();
            return getAllComments;
        }
        catch (err) {
            return err;
        }
    });
}
exports.getAllComments = getAllComments;
function getComment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getComment = yield commentModel_1.commentModel.findById(id);
            return getComment;
        }
        catch (err) {
            return err;
        }
    });
}
exports.getComment = getComment;
function createComment(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createComment = yield commentModel_1.commentModel.create(user);
            return createComment;
        }
        catch (err) {
            return err;
        }
    });
}
exports.createComment = createComment;
function updateComment(userId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateComment = yield commentModel_1.commentModel.findOneAndUpdate({ id: userId }, updates, {
                new: true,
            });
            return updateComment;
        }
        catch (err) {
            return err;
        }
    });
}
exports.updateComment = updateComment;
function deleteComment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleteComment = yield commentModel_1.commentModel.deleteOne({ id: id });
            return deleteComment;
        }
        catch (err) {
            return err;
        }
    });
}
exports.deleteComment = deleteComment;
