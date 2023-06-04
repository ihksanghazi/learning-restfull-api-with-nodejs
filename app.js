const express = require("express");

const app = express();

const mahasiswaRouter = require("./routes/mahasiswa");

app.use("/mahasiswa", mahasiswaRouter);

module.exports = app;
