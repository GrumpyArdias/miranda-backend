import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const conection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conection.connect();

export function getAllRooms() {
  try {
    return new Promise((resolve, reject) => {
      conection.query("SELECT * FROM room", (err, result) => {
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

conection.query(`SELECT * FROM room`, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

conection.end();
