import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

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
  (req: Request, res: Response) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    throw new DatabaseConnectionError();
    console.log(`creating a user with 
                email:    ${req.body.email}
                password: ${req.body.password}
                Right now!!`);

    res.status(201).send({});
  }
);

export { router as signupRouter };
