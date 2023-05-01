import {
  getAllUsers as getAllUsersDB,
  getOneUser as getOneUserDB,
  createUser as createUserDB,
  deleteUser as deleteUserDB,
  updateUser as updateUserDB,
} from "../db/usersDb";

import { UserType } from "../@types/userTypes";

export const getAllUsers = async () => {
  const getAllUsers = await getAllUsersDB();
  return getAllUsers;
};

export const getOneUser = async (userId: string) => {
  const user = await getOneUserDB(userId);
  return user;
};

export const createUser = async (newUser: UserType) => {
  const createdUser = await createUserDB(newUser);
  return createdUser;
};

export const deleteUser = async (userId: string) => {
  const deleteUser = await deleteUserDB(userId);
  return deleteUser;
};

export const updateUser = async (userId: string, newUser: UserType) => {
  const updatedUser = await updateUserDB(userId, newUser);
  return updatedUser;
};
