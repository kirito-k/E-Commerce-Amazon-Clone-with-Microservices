// Goal: This route allows React to determine whether a user is currently logged in our not. If the request cookie has a JWT token, the user is logged in other wise not.

import jwt from "jsonwebtoken";
import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
    return res.send({ currentUser: payload });
  } catch (err) {
    return res.send({ currentUser: null });
  }
});

export { router as currentUserRouter };
