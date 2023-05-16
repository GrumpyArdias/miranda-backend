import { getMongoDb } from "../utils/mongo-connection";
import { UserType } from "../@types/userTypes";
import { userModel } from "../models/userModel";

export async function getAllUsers() {
  let connection;

  try {
    connection = await getMongoDb();
    const getAllusers = await userModel.find();
    console.log(getAllusers);
    return getAllusers;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function getUser(id: string) {
  let connection;

  try {
    connection = await getMongoDb();
    const getUser = await userModel.findById(id);
    console.log(getUser);
    return getUser;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function createUser(user: UserType) {
  let connection;
  try {
    connection = await getMongoDb();
    const createUser = await userModel.create(user);
    return createUser;
  } catch (err) {
    return err;
  } finally {
    connection ? await connection.disconnect() : null;
  }
}

export async function updateUser(
  userId: string,
  updates: Omit<Partial<UserType>, "id">
) {
  let connection;
  try {
    connection = await getMongoDb();
    const updateUser = await userModel.findOneAndUpdate(
      { id: userId },
      updates,
      {
        new: true,
      }
    );
    return updateUser;
  } catch (err) {
    return err;
  } finally {
    connection ? await connection.disconnect() : null;
  }
}

export async function deleteUser(id: string) {
  let connection;
  try {
    connection = await getMongoDb();
    const deleteUser = await userModel.deleteOne({ id: id });
    return deleteUser;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}
