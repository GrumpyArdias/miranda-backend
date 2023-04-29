import express from "express";
import rooms from "./routes/roomsRoutes";
//import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/rooms", rooms);
//app.use(cors());

//-----------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Api listening on port ${PORT}`);
});
