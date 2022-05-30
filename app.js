const express = require("express");
const app = express();
const path = require("path");

app.listen (3003, () => console.log ("Servidor corriendo en puerto 3003"));
app.use (express.static (path.resolve (__dirname, "./public")))

app.set("view engine", "ejs");
app.set("views", "./src/views");

const index = require("./src/routes/index")
app.use('/', index)