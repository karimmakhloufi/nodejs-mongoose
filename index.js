import express from "express";
import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", function callback() {
  console.log("Connected to Mongo");
});
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
