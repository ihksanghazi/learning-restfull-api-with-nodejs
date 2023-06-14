const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const mahasiswaRouter = require("./routes/mahasiswa");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use("/mahasiswa", mahasiswaRouter);
app.use("/assets", express.static("assets"));

app.use((req, res, next) => {
	const error = new Error("Tidak Ditemukan");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
