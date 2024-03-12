import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: ["https://portfolio-vaibhav-ulsa-9hrtq4psr-vaibhavs-projects-9a81377d.vercel.app"],
    methods: ["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
    credentials: true,
  })
);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD"
})})

dbConnection();

app.use(errorMiddleware);

export default app;
