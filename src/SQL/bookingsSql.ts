import { BookingType } from "../@types/bookingTypes";
import { getSQLDb } from "../utils/sql-conection";

//Revisar
export async function getAllBookings() {
  try {
    const connection = await getSQLDb();
    const getAllBookings = await connection.query("SELECT * FROM bookings");
    return getAllBookings;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getBooking(id: string) {
  try {
    const connection = await getSQLDb();
    const getBooking = await connection.execute(
      "SELECT * FROM bookings WHERE id = ?",
      [id]
    );
    return getBooking;
  } catch (err) {
    console.log(err);
    return err;
  }
}

//TODO THIS IS NOT WORKING YET
export async function createBooking(booking: BookingType) {
  try {
    const connection = await getSQLDb();
    const createBooking = await connection.execute(
      "INSERT INTO bookings SET ?",
      [booking]
    );
    return createBooking;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function deleteBooking(id: string) {
  try {
    const connection = await getSQLDb();
    const deleteBooking = await connection.execute(
      "DELETE FROM bookings WHERE id = ?",
      [id]
    );
    return deleteBooking;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function updateBooking(
  bookingId: string,
  updates: Partial<BookingType>
) {
  try {
    const connection = await getSQLDb();
    const updateBooking = await connection.execute(
      "UPDATE bookings SET ? WHERE id = ?",
      [updates, bookingId]
    );
    return updateBooking;
  } catch (err) {
    console.log(err);
    return err;
  }
}
