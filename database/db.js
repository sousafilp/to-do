const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      process.env.DB_URI,
      {
        autoIndex: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
