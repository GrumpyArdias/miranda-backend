"use strict";
//import {
// getAllUsers as getAllUsersDB,
// getOneUser as getOneUserDB,
//createUser as createUserDB,
//deleteUser as deleteUserDB,
// updateUser as updateUserDB,
//} from "../db/usersDb";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getOneUser = exports.getAllUsers = void 0;
// import {
//   getAllUsers as getAllUsersSQL,
//   getUser as getUserSQL,
//   createUser as createUserSQL,
//   deleteUser as deleteUserSQL,
//   updateUser as updateUserSQL,
// } from "../SQL/usersSql";
const userMongo_1 = require("../Mongo/userMongo");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    //const getAllUsers = await getAllUsersSQL();
    // const getAllUsers = await getAllUsersSQL();
    const getAllUsers = yield (0, userMongo_1.getAllUsers)();
    return getAllUsers;
});
exports.getAllUsers = getAllUsers;
const getOneUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await getOneUserDB(userId);
    // const user = await getUserSQL(id);
    const user = yield (0, userMongo_1.getUser)(id);
    return user;
});
exports.getOneUser = getOneUser;
const createUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    // const createdUser = await createUserDB(newUser);
    // const createdUser = await createUserSQL(newUser);
    const createdUser = yield (0, userMongo_1.createUser)(newUser);
    return createdUser;
});
exports.createUser = createUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //const deleteUser = await deleteUserDB(userId);
    // const deleteUser = await deleteUserSQL(id);
    const deleteUser = yield (0, userMongo_1.deleteUser)(id);
    return deleteUser;
});
exports.deleteUser = deleteUser;
const updateUser = (userId, newUser) => __awaiter(void 0, void 0, void 0, function* () {
    //const updatedUser = await updateUserDB(userId, newUser);
    // const updatedUser = await updateUserSQL(userId, newUser);
    const updatedUser = yield (0, userMongo_1.updateUser)(userId, newUser);
    return updatedUser;
});
exports.updateUser = updateUser;
