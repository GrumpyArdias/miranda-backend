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
exports.updateComment = exports.deleteComment = exports.createComment = exports.getOneComment = exports.getAllComments = void 0;
const commentsJoiValidations_1 = require("./../utils/joi/commentsJoiValidations");
const uuid_1 = require("uuid");
const commentsService_1 = require("../services/commentsService");
const commentsValidations_1 = require("../utils/commentsValidations");
const getAllComments = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllComments = yield (0, commentsService_1.getAllComments)();
        return res.send({ status: "Success", data: getAllComments });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getAllComments = getAllComments;
const getOneComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, commentsService_1.getOneComment)(req.params.id);
        if (!comment) {
            return res.send({ status: "Error", data: "Comment not found" });
        }
        return res.send({ status: "Success", data: comment });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getOneComment = getOneComment;
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newComment = req.body;
        const validateComment = yield commentsJoiValidations_1.commentsCreateSchema.validateAsync(newComment);
        const user = Object.assign(Object.assign({}, validateComment), { id: (0, uuid_1.v4)(), date: newComment.date, fullName: newComment.fullName, email: newComment.email, phone: newComment.phone, subject: newComment.subject, comment: newComment.comment, action: newComment.action });
        const createdUser = yield (0, commentsService_1.createComment)(user);
        return res.send({ status: "Success", data: createdUser });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.createComment = createComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, commentsService_1.deleteComment)(req.params.id);
        return res.send({ status: "Success", data: comment });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.deleteComment = deleteComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, commentsValidations_1.validateCommentsParams)(req.body);
        const updatedComment = yield (0, commentsService_1.updateComment)(req.params.id, req.body);
        if (updatedComment instanceof Error) {
            return res.send({ status: "Error", message: updatedComment.message });
        }
        return res.send({ status: "Success", data: updatedComment });
    }
    catch (error) {
        return res.send({ status: "Comment not found", data: error });
    }
});
exports.updateComment = updateComment;
