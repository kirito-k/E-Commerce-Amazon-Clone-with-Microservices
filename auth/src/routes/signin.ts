import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Please provide valid email"),
    body("password").trim().notEmpty().withMessage("Must supply a password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    res.send("Hello from signin");
  }
);

export { router as signinRouter };
