import express from "express";
import bodyParser from "body-parser";

import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { currentUserRouter } from "./routes/current-user";
import { errorHandling } from "./middlewares/errorHandling";

const app = express();

app.use(bodyParser.json());
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);
app.use(errorHandling);

app.get("/api/users", (req, res) => {
  res.send("hello");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Auth is listening on port ${port}`);
});
