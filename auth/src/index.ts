import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import "express-async-errors";

import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { currentUserRouter } from "./routes/current-user";
import { errorHandling } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();

// Explicitely telling express to trust the traffic coming from proxy (ingress-nginx)
// Traffic is coming from HTTPS
app.set("trust proxy", true);

app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);
app.use(bodyParser.json());
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);

// This error will invoke when user try to access a path which does not exist here.
// Order is important. Make sure you invoke this error before your errorHandler middlerware.
// Even if its declared before erroHanlder, at the end it will pass through that function.
app.all("*", async (req, res) => {
  throw new NotFoundError();
});

// Call Custom Error middleware for errors
app.use(errorHandling);

app.get("/api/users/signup", (req, res) => {
  res.send("This is GET /api/users path");
});

// We create this function to use async await for mongodb connection
const start = async () => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY must be defined");
    }

    await mongoose.connect("mongodb://auth-mongo-cip-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Mongodb connected");
  } catch (err) {
    console.error(`Error: ${err}`);
  }

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Auth is listening on port ${port}!`);
  });
};
start();
