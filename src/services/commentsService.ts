// import {
//   getAllComments as getAllCommentsDB,
//   getOneComment as getOneCommentDB,
//   createComment as createCommentDB,
//   deleteComment as deleteCommentDB,
//   updateComment as updateCommentDB,
// } from "../db/commentsDb";

import {
  getAllComments as getAllCommentsSQL,
  getComment as getCommentSQL,
  createComment as createCommentSQL,
  deleteComment as deleteCommentSQL,
  updateComment as updateCommentSQL,
} from "../SQL/commentsSql";

import { CommentsType } from "../@types/commentTypes";

export const getAllComments = async () => {
  // const getAllComments = await getAllCommentsDB();
  const getAllComments = await getAllCommentsSQL();
  return getAllComments;
};

export const getOneComment = async (commentId: string) => {
  // const comment = await getOneCommentDB(commentId);
  const comment = await getCommentSQL(commentId);
  return comment;
};

export const createComment = async (newComment: CommentsType) => {
  // const createdComment = await createCommentDB(newComment);
  const createdComment = await createCommentSQL(newComment);
  return createdComment;
};

export const deleteComment = async (commentId: string) => {
  // const deleteComment = await deleteCommentDB(commentId);
  const deleteComment = await deleteCommentSQL(commentId);
  return deleteComment;
};

export const updateComment = async (
  commentId: string,
  newComment: CommentsType
) => {
  // const updatedComment = await updateCommentDB(commentId, newComment);
  const updatedComment = await updateCommentSQL(commentId, newComment);
  return updatedComment;
};
