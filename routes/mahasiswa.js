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
	const nama = req.body.nama;
	const nim = req.body.nim;
	const jurusan = req.body.jurusan;
	var sql = `INSERT INTO MAHASISWA VALUES ( DEFAULT, '${nama}', '${nim}', '${jurusan}')`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			message: "Berhasil Tambah Data Mahasiswa",
		});
	});
});

router.put("/", (req, res, next) => {
	const nama = req.body.nama;
	const nim = req.body.nim;
	const jurusan = req.body.jurusan;
	var sql = `UPDATE MAHASISWA SET nama='${nama}' , jurusan='${jurusan}' WHERE nim='${nim}' `;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			message: "Data Mahasiswa Berhasil Diubah",
		});
	});
});

router.delete("/", (req, res, next) => {
	const nim = req.body.nim;
	var sql = `DELETE FROM MAHASISWA WHERE nim='${nim}' `;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			message: "Data Mahasiswa Berhasil Dihapus",
		});
	});
});

module.exports = router;
