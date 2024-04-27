const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

const app = express();
const port = 3000;

connectToDb();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// ROTAS
app.use(routes);

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
