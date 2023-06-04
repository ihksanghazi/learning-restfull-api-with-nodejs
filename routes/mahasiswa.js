const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Get Method Mahasiswa",
	});
});

router.get("/:nim", (req, res, next) => {
	res.status(200).json({
		message: "Get Method Mahasiswa",
		nim: `${req.params.nim}`,
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