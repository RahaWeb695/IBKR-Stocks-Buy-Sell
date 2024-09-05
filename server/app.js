import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// routes import
import orderRoute from "./routes/orderRoute.js";

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api", orderRoute);

app.get("/", (req, res) => {
  res.send(
    `Server is working on PORT ${PORT} and project name id heliverse user data`
  );
});

export default app;
