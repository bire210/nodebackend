
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { route } from "./routes/index.js";
import { globalErrorHandling } from "./middlewares/globalErrorHandling.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(helmet());

app.use("/api/v1", route);


//this middleware should be at the bottom this file
app.use(globalErrorHandling);






