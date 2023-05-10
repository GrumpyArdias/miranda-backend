import { UserType } from "./../@types/userTypes";
import { getSQLDb } from "../utils/sql-conection";

export async function getAllUsers() {
  try {
    const connection = await getSQLDb();
    const getAllUsers = await connection.execute("SELECT * FROM users");
    return getAllUsers;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getUser(id: string) {
  try {
    const connection = await getSQLDb();
    const getUser = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return getUser;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function createUser(user: UserType) {
  try {
    const connection = await getSQLDb();
    const createUser = await connection.execute("INSERT INTO users SET ?", [
      user,
    ]);
    return createUser;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function deleteUser(id: string) {
  try {
    const connection = await getSQLDb();
    const deleteUser = await connection.execute(
      "DELETE FROM users WHERE id = ?",
      [id]
    );
    return deleteUser;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function updateUser(userId: string, updates: Partial<UserType>) {
  try {
    const connection = await getSQLDb();
    const updateUser = await connection.execute(
      "UPDATE users SET ? WHERE id = ?",
      [updates, userId]
    );
    return updateUser;
  } catch (err) {
    console.log(err);
    return err;
  }
}
