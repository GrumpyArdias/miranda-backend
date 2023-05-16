import { BookingType } from "./../@types/bookingTypes";
import mongoose from "mongoose";
import { createRandomBooking } from "../seed/bookingsSeeder";
import { getMongoDb } from "../utils/mongo-connection";
import { roomModel } from "./roomModel";

const bookingArr: BookingType[] = [];

const bookingSchema = new mongoose.Schema<BookingType>({
  id: {
    type: String,
    unique: true,
  },
  fullName: {
    type: String,
  },
  bookingDate: {
    type: String,
  },
  checkIn: {
    type: String,
  },
  checkOut: {
    type: String,
  },
  specialRquest: {
    type: String,
  },
  roomType: {
    type: String,
  },
  roomId: {
    type: String,
  },
  status: {
    type: String,
  },
});
export const bookingModel = mongoose.model("Bookings", bookingSchema);

export async function runBookings() {
  let connection;
  const rooms = await roomModel.find();
  const newBooking = await createRandomBooking();
  try {
    connection = await getMongoDb();

    for (let i = 1; i < 20; i++) {
      if (rooms[i].id && rooms[i].bedType) {
        // console.log(rooms[i].id);
        // console.log(newBooking.roomId);
        newBooking.roomId = rooms[i].id;
        newBooking.roomType = rooms[i].bedType;
        bookingArr.push(newBooking);
      } else {
        throw new Error(`Missing 'id' or 'bedType' for room at index ${i}`);
      }
    }
    const savedBookings = await bookingModel
      .insertMany(bookingArr)
      .then((savedBookin) => {
        console.log("Bookings saved: ", savedBookin);
      })
      .catch((err) => {
        console.log("Error saving Booking: ", err);
      });
    return savedBookings;
  } catch (err) {
    console.log("this is the catch error", err);
    return err;
  } finally {
    connection?.disconnect();
  }
}
