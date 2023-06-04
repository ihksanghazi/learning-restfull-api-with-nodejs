const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const mahasiswaRouter = require("./routes/mahasiswa");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use("/mahasiswa", mahasiswaRouter);

module.exports = app;
