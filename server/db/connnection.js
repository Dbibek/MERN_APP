const mongoose = require("mongoose");
const DB = process.env.REACT_APP_DB;

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
