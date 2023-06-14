const express = require("express");
const router = express.Router();
const db = require("../config/database/mysql");
const controller = require("../controller/index");

const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./assets/");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });

router.get("/", controller.mahasiswa.getAll);

router.get("/search", controller.mahasiswa.search);

router.get("/:nim", controller.mahasiswa.getByNim);

router.post("/", upload.single("foto"), controller.mahasiswa.post);

router.put("/:nim", controller.mahasiswa.put);

router.delete("/:nim", controller.mahasiswa.delete);

module.exports = router;
