import { UserType } from "../@types/userTypes";
import { userModel } from "./models/userModel";

export async function getAllUsers() {
  try {
    const getAllusers = await userModel.find();
    console.log(getAllusers);
    return getAllusers;
  } catch (err) {
    return err;
  }
}

export async function getUser(id: string) {
  try {
    const getUser = await userModel.findById(id);
    console.log(getUser);
    return getUser;
  } catch (err) {
    return err;
  }
}

export async function createUser(user: UserType) {
  try {
    const createUser = await userModel.create(user);
    return createUser;
  } catch (err) {
    return err;
  }
}

export async function updateUser(
  userId: string,
  updates: Omit<Partial<UserType>, "id">
) {
  try {
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
  }
}

export async function deleteUser(id: string) {
  try {
    const deleteUser = await userModel.deleteOne({ id: id });
    return deleteUser;
  } catch (err) {
    return err;
  }
}
