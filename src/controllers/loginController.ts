import express from "express";
import JWT from "jsonwebtoken";
import { SECRETS } from "../utils/jwtUtils";
export const LoginController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = req.user;
    const token = JWT.sign({ user }, SECRETS.jwt, { expiresIn: "1h" });
    return res.send({ status: "Success", data: token });
  } catch (error) {
    return res.send({ status: "Error", data: error });
  }
};
