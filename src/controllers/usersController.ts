import express from "express";
import { v4 as uuid } from "uuid";
import {
  getAllUsers as getAllUsersService,
  getOneUser as getOneUserService,
  createUser as createUserService,
  deleteUser as deleteUserService,
  updateUser as updateUserService,
} from "../services/usersService";

import {
  ValidateUserType,
  validateUserParams,
} from "../utils/usersValidations";

export const getAllUsers = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const getAllUsers = await getAllUsersService();
    return res.send({ status: "Success", data: getAllUsers });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const getOneUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = await getOneUserService(req.params.id);
    if (!user) {
      return res.send({ status: "Error", data: "User not found" });
    }
    return res.send({ status: "Success", data: user });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const createUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newUser = req.body;
    const requiredParams = [
      "fullName",
      "email",
      "joinDate",
      "description",
      "status",
      "number",
    ];
    const missingParams = requiredParams.filter(
      (param) => !req.body.hasOwnProperty(param)
    );
    if (missingParams.length > 0) {
      return res.send({
        status: "Error",
        message: `Missing required parameters: ${missingParams.join(", ")}`,
      });
    }

    if (!ValidateUserType(req.body)) {
      return res.send({
        status: "Error",
        message: "Invalid room parameter types",
      });
    }

    const user = {
      ...newUser,
      id: uuid(),
      fullName: newUser.fullName,
      email: newUser.email,
      joinDate: newUser.joinDate,
      description: newUser.description,
      status: newUser.status,
      number: newUser.number,
    };

    const createdUser = await createUserService(user);
    return res.send({ status: "Success", data: createdUser });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deletedUser = await deleteUserService(req.params.id);
    if (deleteUser.length === 0) {
      return res.send({ status: "Error", data: "User not found" });
    }
    return res.send({ status: "Success", data: deletedUser });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    validateUserParams(req.body);
    const updateUser = await updateUserService(req.params.id, req.body);
    if (updateUser instanceof Error) {
      return res.send({ status: "Error", message: updateUser.message });
    }
    return res.send({ status: "Success", data: updateUser });
  } catch (error) {
    console.log(error);
    return res.send({ status: "User not found", data: error });
  }
};
