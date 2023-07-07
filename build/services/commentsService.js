"use strict";
// import {
//   getAllComments as getAllCommentsDB,
//   getOneComment as getOneCommentDB,
//   createComment as createCommentDB,
//   deleteComment as deleteCommentDB,
//   updateComment as updateCommentDB,
// } from "../db/commentsDb";
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
// import {
//   getAllComments as getAllCommentsSQL,
//   getComment as getCommentSQL,
//   createComment as createCommentSQL,
//   deleteComment as deleteCommentSQL,
//   updateComment as updateCommentSQL,
// } from "../SQL/commentsSql";
const commentMongo_1 = require("../Mongo/commentMongo");
const getAllComments = () => __awaiter(void 0, void 0, void 0, function* () {
    // const getAllComments = await getAllCommentsDB();
    // const getAllComments = await getAllCommentsSQL();
    const getAllComments = yield (0, commentMongo_1.getAllComments)();
    return getAllComments;
});
exports.getAllComments = getAllComments;
const getOneComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    // const comment = await getOneCommentDB(commentId);
    // const comment = await getCommentSQL(commentId);
    const comment = yield (0, commentMongo_1.getComment)(commentId);
    return comment;
});
exports.getOneComment = getOneComment;
const createComment = (newComment) => __awaiter(void 0, void 0, void 0, function* () {
    // const createdComment = await createCommentDB(newComment);
    // const createdComment = await createCommentSQL(newComment);
    const createdComment = yield (0, commentMongo_1.createComment)(newComment);
    return createdComment;
});
exports.createComment = createComment;
const deleteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    // const deleteComment = await deleteCommentDB(commentId);
    // const deleteComment = await deleteCommentSQL(commentId);
    const deleteComment = yield (0, commentMongo_1.deleteComment)(commentId);
    return deleteComment;
});
exports.deleteComment = deleteComment;
const updateComment = (commentId, newComment) => __awaiter(void 0, void 0, void 0, function* () {
    // const updatedComment = await updateCommentDB(commentId, newComment);
    // const updatedComment = await updateCommentSQL(commentId, newComment);
    const updatedComment = yield (0, commentMongo_1.updateComment)(commentId, newComment);
    return updatedComment;
});
exports.updateComment = updateComment;
