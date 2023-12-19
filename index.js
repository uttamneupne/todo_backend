import express from "express";
import { connectDB } from "./db.connect.js";
import todoRoutes from "./todo/todo.routes.js";

const app = express();

//connect db
connectDB();
app.use(express.json());

//register routes
app.use(todoRoutes);

app.post("./hello", (req, res) => {
  return res.status(200).send({ message: "hello" });
});

const port = 4000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
