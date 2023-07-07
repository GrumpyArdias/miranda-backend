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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const jwtUtils_1 = require("../utils/jwtUtils");
const passport_jwt_1 = require("passport-jwt");
const userMongo_1 = require("../Mongo/userMongo");
const bcrypt_1 = __importDefault(require("bcrypt"));
passport_1.default.use("login", new passport_local_1.Strategy({
    usernameField: "email",
    passwordField: "password",
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userMongo_1.getUserbyMail)(email);
        const match = bcrypt_1.default.compareSync(password, user.password);
        if (match) {
            return done(null, user, { message: "Logged in Successfully" });
        }
        else {
            return done(null, false, { message: "Bad credentials" });
        }
    }
    catch (error) {
        return done(error);
    }
})));
passport_1.default.use(new passport_jwt_1.Strategy({
    secretOrKey: jwtUtils_1.SECRETS.jwt,
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
}, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return done(null, payload.user);
    }
    catch (error) {
        done(error);
    }
})));
exports.default = passport_1.default;
