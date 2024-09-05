import express from "express";
import dotenv from "dotenv";
import app from "./app.js";
import connectDatabase from "./config/database.js";

dotenv.config({ path: "./config/config.env" });

connectDatabase();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is working on PORT ${PORT}`);
});
