import express from "express";

export function middleWare(
  error: Error,
  _req: express.Request,
  res: express.Response
) {
  res.status(500).send(error.message);
}
