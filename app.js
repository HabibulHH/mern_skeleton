const express = require("express");
const dotenv = require("dotenv");
const login = require("./routers/login/loginRouter");

const app = express();
dotenv.config();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use("/login", login);
app.listen(process.env.PORT, () => {
  console.log("listening to port ");
});
