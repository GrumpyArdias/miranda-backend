import {
  getAllBookings as getAllBookingsDB,
  getOneBooking as getOneBookingDB,
  deleteBooking as deleteBookingDB,
  createBooking as createBookingDB,
  updateBooking as updateBookingDB,
} from "../db/bookingsDb";
import { BookingType } from "../@types/bookingTypes";

export const getAllBookings = async () => {
  const getAllBookings = await getAllBookingsDB();
  return getAllBookings;
};

export const getOneBooking = async (bookingId: string) => {
  const booking = await getOneBookingDB(bookingId);
  return booking;
};
export const deleteBooking = async (bookingId: string) => {
  const deleteBooking = await deleteBookingDB(bookingId);
  return deleteBooking;
};

export const createBooking = async (newBooking: BookingType) => {
  const createBooking = await createBookingDB(newBooking);
  return createBooking;
};

export const updateBooking = async (
  bookingId: string,
  newBooking: BookingType
) => {
  const updatedBooking = await updateBookingDB(bookingId, newBooking);
  return updatedBooking;
};
