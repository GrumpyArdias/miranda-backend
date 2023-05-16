import { getMongoDb } from "../utils/mongo-connection";
import { BookingType } from "../@types/bookingTypes";
import { bookingModel } from "../models/bookingModel";

export async function getAllBookings() {
  let connection;
  try {
    connection = await getMongoDb();
    const getAllBookings = await bookingModel.find();
    return getAllBookings;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function getBooking(id: string) {
  let connection;

  try {
    connection = await getMongoDb();
    const getBooking = await bookingModel.findById(id);
    return getBooking;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}

export async function createBooking(user: BookingType) {
  let connection;
  try {
    connection = await getMongoDb();
    const createBooking = await bookingModel.create(user);
    return createBooking;
  } catch (err) {
    return err;
  } finally {
    connection ? await connection.disconnect() : null;
  }
}

export async function updateBooking(
  userId: string,
  updates: Omit<Partial<BookingType>, "id">
) {
  let connection;
  try {
    connection = await getMongoDb();
    const updateBooking = await bookingModel.findOneAndUpdate(
      { id: userId },
      updates,
      {
        new: true,
      }
    );
    return updateBooking;
  } catch (err) {
    return err;
  } finally {
    connection ? await connection.disconnect() : null;
  }
}

export async function deleteBooking(id: string) {
  let connection;
  try {
    connection = await getMongoDb();
    const deleteBooking = await bookingModel.deleteOne({ id: id });
    return deleteBooking;
  } catch (err) {
    return err;
  } finally {
    connection ? (await connection).disconnect() : null;
  }
}
