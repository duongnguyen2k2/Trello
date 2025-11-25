import express from "express";
const app = express();

const hostname = "localhost";
const port = 8017;

app.get("/", (req, res) => {
  res.send("<h1>Hello Nodejs From vietduong2k2</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Hello vietduong2k2, I'am running at http://${hostname}:${port}`);
});
