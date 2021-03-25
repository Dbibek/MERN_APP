const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB = process.env.REACT_APP_DB;

console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successful with mongoDb");
  })
  .catch((err) => console.log("connetcion failed with mongoDb "));
//middleware

const middleware = (req, res, next) => {
  console.log("middleware");
};
middleware();

app.get("/", (req, res) => {
  res.send("hello world from server");
});
app.get("/about", (req, res) => {
  res.send("hello About world from server");
});
app.get("/contact", (req, res) => {
  res.send("hello Contact world from server");
});
app.get("/signin", (req, res) => {
  res.send("hello Login world from server");
});
app.get("/signup", (req, res) => {
  res.send("hello Signup world from server");
});

app.listen(5000, () => {
  console.log(`server running at port 5000`);
});
