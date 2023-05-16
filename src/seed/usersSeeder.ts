import { faker } from "@faker-js/faker";
import { UserType } from "../@types/userTypes";

export function createRandomUser(): UserType {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    email: faker.internet.email(),
    joinDate: faker.date.recent().toLocaleDateString(),
    jobTitle: faker.name.jobTitle(),
    estatus: faker.datatype.boolean(),
    number: faker.phone.number("+34-###-###-###"),
  };
}
