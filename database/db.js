const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:devfoda1@todolist.nkmr7du.mongodb.net/?retryWrites=true&w=majority&appName=todolist",
      {
        autoIndex: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
