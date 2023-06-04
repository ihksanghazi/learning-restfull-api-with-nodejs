const express = require("express");
const db = require("../config/mysql");

const router = express.Router();

router.get("/", (req, res, next) => {
	var sql = "SELECT * FROM mahasiswa";
	db.query(sql, (err, result) => {
		if (err) throw err;

		res.status(200).json({
			message: "Get Method Mahasiswa",
			data: result,
		});
	});
});

router.get("/:nim", (req, res, next) => {
	var sql = `SELECT * FROM mahasiswa WHERE NIM = ${req.params.nim}`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			message: "Get Method Mahasiswa",
			data: result,
		});
	});
});

router.post("/", (req, res, next) => {
	const mahasiswa = {
		nama: req.body.nama,
		nim: req.body.nim,
	};
	res.status(200).json({
		message: "Post Method Mahasiswa",
		data: mahasiswa,
	});
});

router.put("/", (req, res, next) => {
	res.status(200).json({
		message: "Put Method Mahasiswa",
	});
});

router.delete("/", (req, res, next) => {
	res.status(200).json({
		message: "Delete Method Mahasiswa",
	});
});

module.exports = router;
