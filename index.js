import express from "express";
import { connectDB } from "./config/db.js";
import todoRouter from "./routes/todoRoute.js";

const app = express();
import "dotenv/config";

const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",todoRouter);

app.listen(PORT, async () => {
  console.log("app running on port", PORT);
  await connectDB();
});
