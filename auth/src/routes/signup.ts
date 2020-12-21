import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/users";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Please provide valid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 16 })
      .withMessage("Please provide password between length 4 to 16"),
  ],
  async (req: Request, res: Response) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    // Check if the email already in use
    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    console.log("Here1");

    if (existingUser) {
      console.log("Email already in use");
      // throw new BadRequestError("Email already in use");
      return res.send({});
    }
    console.log("Here2");

    // Create user and save
    const user = User.build({ email, password });
    console.log("Here3");

    await user.save();
    console.log("Here4");

    res.status(201).send(user);
  }
);

export { router as signupRouter };
