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

export async function runBookings() {
  let connection;
  const rooms = await roomModel.find({});

  try {
    connection = await getMongoDb();
    const bookingModel = mongoose.model("Bookings", bookingSchema);

    for (let i = 0; i <= 20; i++) {
      const newBooking = createRandomBooking();
      newBooking.roomId = rooms[i].id;
      newBooking.roomId = rooms[i].id;
      newBooking.roomType = rooms[i].bedType;
      bookingArr.push(newBooking);
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
    console.log("this is the catch error");
    return err;
  } finally {
    connection?.disconnect();
  }
}
