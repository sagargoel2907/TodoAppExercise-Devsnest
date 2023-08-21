import express from "express";
import "dot"
const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("app running on port", PORT);
})