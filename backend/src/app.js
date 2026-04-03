import express from "express";
import cors from "cors";
import helmet from "helmet";
import { db } from "./config/db.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

db.query("SELECT NOW()")
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));
  
export default app;