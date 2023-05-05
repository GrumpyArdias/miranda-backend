import express from "express";
import rooms from "./routes/roomsRoutes";
import bookings from "./routes/bookingsRoutes";
import users from "./routes/usersRoutes";
import comments from "./routes/commentsRoutes";
import Login from "./routes/loginRoutes";
import "./auth/auth";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
const app = express();
const PORT = 3000;
//import mongoose from "mongoose";
import session from "express-session";
import cookiparser from "cookie-parser";

// async function connectToDatabase() {
//   try {
//     const options = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       autoIndex: true,
//     } as mongoose.ConnectOptions;

//     await mongoose.connect("mongodb://127.0.0.1:27017/passport-jwt", options);
//     console.log("MongoDB connected successfully!");
//   } catch (err) {
//     console.error(`MongoDB connection error: ${err}`);
//   }
// }

// connectToDatabase();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookiparser());
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//-----------------------------------------------------------

app.use("/login", Login);
app.use("/api/rooms", passport.authenticate("jwt", { session: false }), rooms);
app.use(
  "/api/bookings",
  passport.authenticate("jwt", { session: false }),
  bookings
);
app.use("/api/users", passport.authenticate("jwt", { session: false }), users);
app.use(
  "/api/comments",
  passport.authenticate("jwt", { session: false }),
  comments
);

// app.use(function (
//   err: ErrorType,
//   _req: express.Request,
//   res: express.Response,
//   _next: express.NextFunction
// ) {
//   console.log("this is the error in the index");
//   res.status(err.status || 500);
//   res.json({ error: err });
// });

//-----------------------------------------------------------

export const server = app.listen(PORT, () => {
  console.log(`Api listening on port ${PORT}`);
});

export default app;
