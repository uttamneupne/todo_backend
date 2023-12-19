import { Router } from "express";

const Router = Router();

router.post("/user/register", (req, res) => {
  //extract mew user data from req.body

  //validate new user

  //if validation fails throw error

  console.log(req.body);
  return res.status(201).send({ message: "user is registered successfully." });
});
