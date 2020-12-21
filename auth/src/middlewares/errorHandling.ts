import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandling = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  console.log(`err: ${err}`);
  console.log(`req: ${req}`);

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
