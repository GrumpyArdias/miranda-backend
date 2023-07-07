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
Object.defineProperty(exports, "__esModule", { value: true });
exports.runUsers = exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const usersSeeder_1 = require("../../SQL/seed/usersSeeder");
const mongo_connection_1 = require("../mongo-connection");
const userArr = [];
const userSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        unique: true,
    },
    fullName: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
    },
    joinDate: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
    estatus: {
        type: Boolean,
    },
    number: {
        type: String,
    },
    password: {
        type: String,
    },
});
exports.userModel = mongoose_1.default.model("Users", userSchema);
function runUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield (0, mongo_connection_1.getMongoDb)();
            for (let i = 1; i <= 20; i++) {
                userArr.push((0, usersSeeder_1.createRandomUser)());
                1;
            }
            const saveUsers = yield exports.userModel
                .insertMany(userArr)
                .then((savedUser) => {
                console.log(savedUser);
            })
                .catch((err) => {
                console.log(err);
            });
            return saveUsers;
        }
        catch (err) {
            return err;
        }
        finally {
            connection === null || connection === void 0 ? void 0 : connection.disconnect();
        }
    });
}
exports.runUsers = runUsers;
