
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { route } from "./routes/index.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(helmet());

app.use("/api/v1", route)






