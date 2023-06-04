import express from "express";
import JWT from "jsonwebtoken";
import { SECRETS } from "../utils/jwtUtils";
export const LoginController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = req.user;
    const expiresIn = "365d";
    const token = JWT.sign({ user }, SECRETS.jwt, { expiresIn });
    return res.json({ status: "Success", data: token });
  } catch (error) {
    return res.json({ status: "Error", data: error });
  }
};
