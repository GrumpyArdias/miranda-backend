import express from "express";
import { v4 as uuid } from "uuid";
import {
  getAllComments as getAllCommentsService,
  getOneComment as getOneCommentService,
  createComment as createCommentService,
  deleteComment as deleteCommentService,
  updateComment as updateCommentService,
} from "../services/commentsService";

import {
  ValidateCommentsType,
  validateCommentsParams,
} from "../utils/commentsValidations";

export const getAllComments = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const getAllComments = await getAllCommentsService();
    return res.send({ status: "Success", data: getAllComments });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const getOneComment = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const comment = await getOneCommentService(req.params.id);
    if (!comment) {
      return res.send({ status: "Error", data: "Comment not found" });
    }
    return res.send({ status: "Success", data: comment });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const createComment = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newComment = req.body;

    const requiredParams = [
      "date",
      "fullName",
      "email",
      "phone",
      "subject",
      "comment",
      "action",
    ];
    const missingParams = requiredParams.filter((param) => {
      return !req.body.hasOwnProperty(param);
    });

    if (missingParams.length > 0) {
      return res.send({
        status: "Error",
        message: `Missing required parameters: ${missingParams.join(", ")}`,
      });
    }

    if (!ValidateCommentsType(req.body)) {
      return res.send({
        status: "Error",
        message: "Invalid Comment parameter types",
      });
    }

    const user = {
      ...newComment,
      id: uuid(),
      date: newComment.date,
      fullName: newComment.fullName,
      email: newComment.email,
      phone: newComment.phone,
      subject: newComment.subject,
      comment: newComment.comment,
      action: newComment.action,
    };

    const createdUser = await createCommentService(user);
    return res.send({ status: "Success", data: createdUser });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const deleteComment = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deleteUser = await deleteCommentService(req.params.id);
    const comment = await deleteCommentService(req.params.id);
    if (deleteUser.length === 0) {
      return res.send({ status: "Error", data: "Comment not found" });
    }
    return res.send({ status: "Success", data: comment });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const updateComment = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    validateCommentsParams(req.body);
    const updatedComment = await updateCommentService(req.params.id, req.body);
    if (updatedComment instanceof Error) {
      return res.send({ status: "Error", message: updatedComment.message });
    }
    return res.send({ status: "Success", data: updatedComment });
  } catch (error) {
    console.log(error);
    return res.send({ status: "Comment not found", data: error });
  }
};
