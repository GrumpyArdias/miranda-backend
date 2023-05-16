import { faker } from "@faker-js/faker";
import { CommentsType } from "../@types/commentTypes";

export function createRandomComment(): CommentsType {
  return {
    id: faker.datatype.uuid(),
    commentDate: faker.date.recent().toDateString(),
    fullName: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number("+34-###-###-###"),
    subject: faker.lorem.sentence(5),
    comment: faker.datatype.boolean(),
    action: faker.datatype.boolean(),
  };
}
