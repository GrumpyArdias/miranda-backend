"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rooms_1 = __importDefault(require("./routes/rooms"));
//import cors from "cors";
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/api/v1/routes", rooms_1.default);
//app.use(cors());
//-----------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Api listening on port ${PORT}`);
});
