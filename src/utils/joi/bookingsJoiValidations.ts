import Joi from "joi";
import { BookingType } from "../../@types/bookingTypes";

export const bookingCreateSchema = Joi.object<BookingType>({
  fullName: Joi.string().required().min(3).max(50),
  bookingDate: Joi.string().isoDate().required(),
  checkIn: Joi.string().isoDate().required(),
  checkOut: Joi.string().isoDate().required(),
  specialRquest: Joi.string().required().min(3).max(256),
  roomType: Joi.string().required().min(3).max(50),
  roomId: Joi.string().required().alphanum(),
  status: Joi.string().required(),
});
