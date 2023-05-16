import { getMongoDb } from "../utils/mongo-connection";
import { CommentsType } from "../@types/commentTypes";
import { commentModel } from "../models/commentModel";

export async function getAllComments() {
  let connection;
  try {
    connection = await getMongoDb();
    const getAllComments = await commentModel.find();
    return getAllComments;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function getComment(id: string) {
  let connection;

  try {
    connection = await getMongoDb();
    const getComment = await commentModel.findById(id);
    return getComment;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function createComment(user: CommentsType) {
  let connection;
  try {
    connection = await getMongoDb();
    const createComment = await commentModel.create(user);
    return createComment;
  } catch (err) {
    return err;
  } finally {
    connection ? await connection.disconnect() : null;
  }
}

export async function updateComment(
  userId: string,
  updates: Omit<Partial<CommentsType>, "id">
) {
  let connection;
  try {
    connection = await getMongoDb();
    const updateComment = await commentModel.findOneAndUpdate(
      { id: userId },
      updates,
      {
        new: true,
      }
    );
    return updateComment;
  } catch (err) {
    return err;
  } finally {
    connection ? await connection.disconnect() : null;
  }
}

export async function deleteComment(id: string) {
  let connection;
  try {
    connection = await getMongoDb();
    const deleteComment = await commentModel.deleteOne({ id: id });
    return deleteComment;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}
