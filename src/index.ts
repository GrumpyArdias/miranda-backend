import express from "express";
import rooms from "./routes/roomsRoutes";
import bookings from "./routes/bookingsRoutes";
import users from "./routes/usersRoutes";
import comments from "./routes/commentsRoutes";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/rooms", rooms);
app.use("/api/bookings", bookings);
app.use("/api/users", users);
app.use("/api/comments", comments);

//-----------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Api listening on port ${PORT}`);
});
