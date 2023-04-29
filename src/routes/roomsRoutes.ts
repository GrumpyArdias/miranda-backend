import express from "express";
const router = express.Router();

// GETS

router.get("/getAllRooms", (_req: express.Request, res: express.Response) => {
  res.send("Get All Rooms");
});

router.get("/getOneRoom/id", (_req: express.Request, res: express.Response) => {
  res.send("Get One Room");
});

//POST

router.post("/createRoom", (_req: express.Request, res: express.Response) => {
  res.send("Create Room");
});

//DELETE

router.delete(
  "/deleteRoom/id",
  (_req: express.Request, res: express.Response) => {
    res.send("Delete Room");
  }
);

export default router;
