import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  res.status(200).send("HELLO from /api/users")
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Auth is listening on port ${port}!!`)
})