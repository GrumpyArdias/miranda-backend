import { faker } from "@faker-js/faker";
import { RoomType } from "../@types/roomTypes";
const bedKinds = ["single", "double", "double-superior", "suite"];
const roomFacilities = [
  "Wifi",
  "TV",
  "Kitchen",
  "Free parking",
  "Air conditioning",
  "Bathtub",
  "Coffee set",
];

export function createRandomRoom(): RoomType {
  return {
    id: faker.datatype.uuid(),
    bedType: faker.helpers.arrayElement(bedKinds),
    estatus: faker.datatype.boolean(),
    facilities: faker.helpers.arrayElements(roomFacilities, 3),
    price: faker.datatype.number({
      min: 1,
      max: 1000,
    }),
    discount: faker.datatype.number({
      min: 1,
      max: 100,
    }),
    doorNumber: faker.datatype.number({
      min: 1,
      max: 20,
    }),
    floorNumber: faker.datatype.number({
      min: 1,
      max: 5,
    }),
  };
}
