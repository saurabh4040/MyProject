import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGOURl, {
      dbName: "DoSchedulise",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
