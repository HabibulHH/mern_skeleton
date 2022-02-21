const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log("listening to port ");
});
