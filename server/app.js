const dotenv = require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT | 5000;
require("./db/connnection");
// const User = require("./model/userSchema");

app.use(express.json());
//link router file
app.use(require("./router/auth"));
//middleware

// const middleware = (req, res, next) => {
//   console.log("middleware");
// };
// middleware();

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
  console.log(`server running at port ${PORT}`);
});
