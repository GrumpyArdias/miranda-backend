"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = exports.getMongoDb = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const uri = (_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : "";
function getMongoDb() {
    return mongoose_1.default.connect(uri);
}
exports.getMongoDb = getMongoDb;
const mongoConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield getMongoDb();
        console.log("You have been connected to the Mongo DB");
        return connection;
    }
    catch (err) {
        throw new Error("Unable to connect to Mongo Db");
    }
});
exports.mongoConnect = mongoConnect;
