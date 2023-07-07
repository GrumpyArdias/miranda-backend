"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomsRoutes_1 = __importDefault(require("./routes/roomsRoutes"));
const bookingsRoutes_1 = __importDefault(require("./routes/bookingsRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const commentsRoutes_1 = __importDefault(require("./routes/commentsRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
require("./auth/auth");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongo_connection_1 = require("./Mongo/mongo-connection");
const middelware_1 = require("./middleware/middelware");
const aws_serverless_express_1 = __importDefault(require("aws-serverless-express"));
// import { runUsers } from "./Mongo/models/userModel";
// import { createMe } from "./Mongo/models/seeder/userSeeder";
// Seeders
//mongo
const app = (0, express_1.default)();
(0, mongo_connection_1.mongoConnect)();
// runBookings();
// createMe()
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/login", loginRoutes_1.default);
app.use("/api/rooms", passport_1.default.authenticate("jwt", { session: false }), roomsRoutes_1.default);
app.use("/api/bookings", passport_1.default.authenticate("jwt", { session: false }), bookingsRoutes_1.default);
app.use("/api/users", passport_1.default.authenticate("jwt", { session: false }), usersRoutes_1.default);
app.use("/api/comments", passport_1.default.authenticate("jwt", { session: false }), commentsRoutes_1.default);
app.use(middelware_1.middleWare);
// export const server = app.listen(PORT, () => {
//   console.log(`Api listening on port ${PORT}`);
// });
const server = aws_serverless_express_1.default.createServer(app);
exports.handler = (event, context) => {
    aws_serverless_express_1.default.proxy(server, event, context);
};
exports.default = app;
