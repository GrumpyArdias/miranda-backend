import { faker } from "@faker-js/faker";
import { BookingType } from "../@types/bookingTypes";

const bookingStatus = ["inProgress", "Booked", "Canceled"];

export function createRandomBooking(): BookingType {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    bookingDate: faker.date.recent().toLocaleDateString(),
    checkIn: faker.date.recent().toLocaleDateString(),
    checkOut: faker.date.recent().toLocaleDateString(),
    specialRquest: faker.lorem.sentence(5),
    roomType: "placeholder",
    roomId: "Placeholder",
    status: faker.helpers.arrayElement(bookingStatus),
  };
}
