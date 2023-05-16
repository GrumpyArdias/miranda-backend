import mongoose from "mongoose";
import { CommentsType } from "../@types/commentTypes";
import { createRandomComment } from "../seed/commentsSeeder";
import { getMongoDb } from "../utils/mongo-connection";

const commentArr: CommentsType[] = [];

const commentSchema = new mongoose.Schema<CommentsType>({
  id: {
    type: String,
    unique: true,
  },
  commentDate: {
    type: String,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  subject: {
    type: String,
  },
  comment: {
    type: Boolean,
  },
  action: {
    type: Boolean,
  },
});

export async function runComments() {
  let connection;
  try {
    connection = await getMongoDb();

    const commentModel = mongoose.model("Comments", commentSchema);

    for (let i = 1; i <= 20; i++) {
      commentArr.push(createRandomComment());
    }
    const savedComments = await commentModel
      .insertMany(commentArr)
      .then((savedComment) => {
        console.log("Comment saved", savedComment);
      })
      .catch((error) => {
        console.error("Error saving Comments:", error);
      });
    return savedComments;
  } catch (err) {
    return err;
  } finally {
    connection?.disconnect();
  }
}
