const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
};

module.exports = connect;
