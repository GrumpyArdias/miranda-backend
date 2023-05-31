import { UserType } from "../../../@types/userTypes";
import { createRandomUser } from "../../../SQL/seed/usersSeeder";
import { getMongoDb } from "../../mongo-connection";
import { userModel } from "../userModel";

const userArr: UserType[] = [];

export async function runUsers() {
  let connection;

  try {
    connection = await getMongoDb();

    for (let i = 1; i <= 20; i++) {
      userArr.push(createRandomUser());
      1;
    }

    const saveUsers = await userModel
      .insertMany(userArr)
      .then((savedUser) => {
        console.log("User saved", savedUser);
      })
      .catch((err) => {
        console.log("Error saving Users", err);
      });
    return saveUsers;
  } catch (err) {
    return err;
  } finally {
    connection?.disconnect();
  }
}
