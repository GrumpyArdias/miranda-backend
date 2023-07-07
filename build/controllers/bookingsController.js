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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = exports.updateBooking = exports.deleteBooking = exports.getOneBooking = exports.getAllBookings = void 0;
const bookingsJoiValidations_1 = require("./../utils/joi/bookingsJoiValidations");
const bookingsService_1 = require("../services/bookingsService");
const uuid_1 = require("uuid");
const bookingsValidations_1 = require("../utils/bookingsValidations");
const getAllBookings = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllBookings = yield (0, bookingsService_1.getAllBookings)();
        return res.send({ status: "Success", data: getAllBookings });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getAllBookings = getAllBookings;
const getOneBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getOneBooking = yield (0, bookingsService_1.getOneBooking)(req.params.id);
        if (!getOneBooking) {
            return res.send({ status: "Error", data: "Booking not found" });
        }
        return res.send({ status: "Success", data: getOneBooking });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.getOneBooking = getOneBooking;
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteBooking = yield (0, bookingsService_1.deleteBooking)(req.params.id);
        return res.send({ status: "Success", data: deleteBooking });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.deleteBooking = deleteBooking;
const updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, bookingsValidations_1.validateBookingParams)(req.body);
        const updateBooking = yield (0, bookingsService_1.updateBooking)(req.params.id, req.body);
        if (updateBooking instanceof Error) {
            return res.send({ status: "Error", message: updateBooking.message });
        }
        return res.send({ status: "Success", data: updateBooking });
    }
    catch (error) {
        return res.send({ status: "Room not found", data: error });
    }
});
exports.updateBooking = updateBooking;
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBooking = req.body;
        const validatedBooking = yield bookingsJoiValidations_1.bookingCreateSchema.validateAsync(newBooking);
        const booking = Object.assign(Object.assign({}, validatedBooking), { id: (0, uuid_1.v4)() });
        const createdBooking = yield (0, bookingsService_1.createBooking)(booking);
        console.log("this is the createdBooking", createdBooking);
        return res.send({ status: "Success", data: createdBooking });
    }
    catch (error) {
        return res.send({ status: "Error", data: error });
    }
});
exports.createBooking = createBooking;
