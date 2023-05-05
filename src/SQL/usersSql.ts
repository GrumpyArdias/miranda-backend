import { UserType } from "./../@types/userTypes";
import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const conectionStatus = () => {
  try {
    connection.connect();
    console.log("You have been connected to the DB");
    return true;
  } catch (err) {
    console.log("failed to connect to the DB", err);
    return false;
  }
};

conectionStatus();

export function getAllUsers() {
  try {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function getUser({ id }: UserType) {
  try {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM users WHERE id=${id}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function createUser(user: UserType) {
  try {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO users SET ?", user, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function deleteUser({ id }: UserType) {
  try {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM users WHERE id=${id}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function updateUser(userId: string, updates: Partial<UserType>) {
  try {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE users SET ? WHERE id=${userId}`,
        updates,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

connection.end();
