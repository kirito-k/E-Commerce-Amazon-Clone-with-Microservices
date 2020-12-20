import express from "express";
import bodyParser from "body-parser";
import "express-async-errors";

import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { currentUserRouter } from "./routes/current-user";
import { errorHandling } from "./middlewares/errorHandling";
import { NotFound } from "./errors/not-found-error";

const app = express();

app.use(bodyParser.json());
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);

// This error will invoke when user try to access a path which does not exist here.
// Order is important. Make sure you invoke this error before your errorHandler middlerware.
// Even if its declared before erroHanlder, at the end it will pass through that function.
app.all("*", async () => {
  throw new NotFound();
});

// Call Custom Error middleware for errors
app.use(errorHandling);

app.get("/api/users/signup", (req, res) => {
  res.send("This is GET /api/users path");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Auth is listening on port ${port}`);
});
