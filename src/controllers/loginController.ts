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
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
};
