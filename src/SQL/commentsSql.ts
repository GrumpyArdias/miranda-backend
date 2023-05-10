import { CommentsType } from "../@types/commentTypes";
import { getSQLDb } from "../utils/sql-conection";

export async function getAllComments() {
  try {
    const connection = await getSQLDb();
    const getAllComments = await connection.query("SELECT * FROM comments");
    return getAllComments;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getComment(id: string) {
  try {
    const connection = await getSQLDb();
    const getComment = await connection.execute(
      "SELECT * FROM comments WHERE id = ?",
      [id]
    );
    return getComment;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function createComment(comment: CommentsType) {
  try {
    const connection = await getSQLDb();
    const createComment = await connection.execute(
      "INSERT INTO comments SET ?",
      [comment]
    );
    return createComment;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function deleteComment(id: string) {
  try {
    const connection = await getSQLDb();
    const deleteComment = await connection.execute(
      "DELETE FROM comments WHERE id = ?",
      [id]
    );
    return deleteComment;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function updateComment(
  commentId: string,
  updates: Partial<CommentsType>
) {
  try {
    const connection = await getSQLDb();
    const updateComment = await connection.execute(
      "UPDATE comments SET ? WHERE id = ?",
      [updates, commentId]
    );
    return updateComment;
  } catch (err) {
    console.log(err);
    return err;
  }
}
