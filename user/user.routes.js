import { Router } from "express";
import { registerUserValidation } from "./user.validation.js";

const router = Router();

router.post("/user/register", async (req, res) => {
  // extract new user data from req.body
  const newUser = req.body;

  // validate new user
  try {
    await registerUserValidation.validate(newUser);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
  next();

  // if validation fails, throw error
  console.log(req.body);
  return res.status(201).send({ message: "User is registered successfully." });
});

export default router;
