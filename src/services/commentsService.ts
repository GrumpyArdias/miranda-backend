import {
  getAllComments as getAllCommentsDB,
  getOneComment as getOneCommentDB,
  createComment as createCommentDB,
  deleteComment as deleteCommentDB,
  updateComment as updateCommentDB,
} from "../db/commentsDb";

import { CommentsType } from "../@types/commentTypes";

export const getAllComments = async () => {
  const getAllComments = await getAllCommentsDB();
  return getAllComments;
};

export const getOneComment = async (commentId: string) => {
  const comment = await getOneCommentDB(commentId);
  return comment;
};

export const createComment = async (newComment: CommentsType) => {
  const createdComment = await createCommentDB(newComment);
  return createdComment;
};

export const deleteComment = async (commentId: string) => {
  const deleteComment = await deleteCommentDB(commentId);
  return deleteComment;
};

export const updateComment = async (
  commentId: string,
  newComment: CommentsType
) => {
  const updatedComment = await updateCommentDB(commentId, newComment);
  return updatedComment;
};
