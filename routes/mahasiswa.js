const express = require("express");
const router = express.Router();
const db = require("../config/database/mysql");
const controller = require("../controller/index");

router.get("/", controller.mahasiswa.getAll);

router.get("/search", (req, res, next) => {
	const nim = req.query.nim;
	var sql = `SELECT * FROM mahasiswa WHERE NIM = ${nim}`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.status(200).json({
				message: "Mahasiswa Ditemukan",
				data: result,
			});
		} else {
			res.status(200).json({
				message: "Mahasiswa Tidak Ditemukan",
				data: result,
			});
		}
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

router.delete("/:nim", (req, res, next) => {
	const nim = req.params.nim;
	var sql = `DELETE FROM MAHASISWA WHERE nim='${nim}' `;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			message: "Data Mahasiswa Berhasil Dihapus",
		});
	});
});

module.exports = router;
