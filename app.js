const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
const helmet = require("helmet");
const mahasiswaRouter = require("./routes/mahasiswa");
const axiosRouter = require("./routes/axios");

app.use(helmet());

app.use(
	basicAuth({
		users: { admin: "rahasia" },
		unauthorizedResponse: basicAuthResponse,
	})
);

function basicAuthResponse(req) {
	return req.auth
		? "Credentials" + req.auth.user + ":" + req.auth.password + "rejected"
		: "Unauthorized";
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/mahasiswa", mahasiswaRouter);
app.use("/axios", axiosRouter);
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
