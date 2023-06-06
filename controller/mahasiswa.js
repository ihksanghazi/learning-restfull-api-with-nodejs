const model = require("../config/model/index");
const { Op } = require("sequelize");
const controller = {};

controller.getAll = async function (req, res) {
	try {
		let mahasiswa = await model.mahasiswa.findAll({
			attributes: [
				["nim", "Nim Mahasiswa"],
				["nama", "Nama Mahasiswa"],
				["kd_jurusan", "Kode Jurusan"],
				["angkatan", "Tahun Angkatan"],
				"kota",
			],
		});
		if (mahasiswa.length > 0) {
			res.status(200).json({
				message: "Ambil Semua Data Mahasiswa",
				data: mahasiswa,
			});
		} else {
			res.status(200).json({
				message: "Tidak Ada Data Mahasiswa",
				data: [],
			});
		}
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

controller.getByNim = async function (req, res) {
	try {
		let mahasiswa = await model.mahasiswa.findAll({
			where: { nim: req.params.nim },
		});
		if (mahasiswa.length > 0) {
			res.status(200).json({
				message: "Data Mahasiswa Ditemukan",
				data: mahasiswa,
			});
		} else {
			res.status(200).json({
				message: "Data Mahasiswa Tidak Ditemukan",
				data: [],
			});
		}
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

controller.search = async function (req, res) {
	try {
		let cari = req.query.cari;
		let mahasiswa = await model.mahasiswa.findAll({
			where: {
				[Op.or]: [
					{
						nim: {
							[Op.like]: "%" + cari + "%",
						},
					},
					{
						nama: {
							[Op.like]: "%" + cari + "%",
						},
					},
				],
			},
		});

		if (mahasiswa.length > 0) {
			res.status(200).json({
				message: "Berhasil Cari Mahasiswa",
				data: mahasiswa,
			});
		} else {
			res.status(200).json({
				message: "Data Mahasiswa Tidak Ada",
				data: [],
			});
		}
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

controller.post = async function (req, res) {
	try {
		let mahasiswa = await model.mahasiswa.create({
			nim: req.body.nim,
			nama: req.body.nama,
			kd_jurusan: req.body.kd_jurusan,
			angkatan: req.body.angkatan,
			kota: req.body.kota,
		});
		res.status(201).json({
			message: "Data Mahasiswa Berhasil Ditambahkan",
			data: mahasiswa,
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

controller.put = async function (req, res) {
	try {
		let mahasiswa = await model.mahasiswa.update(
			{
				nama: req.body.nama,
				kd_jurusan: req.body.kd_jurusan,
				angkatan: req.body.angkatan,
				kota: req.body.kota,
			},
			{
				where: {
					nim: req.params.nim,
				},
			}
		);
		res.status(201).json({
			message: "Data Mahasiswa Berhasil Diubah",
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

controller.delete = async function (req, res) {
	try {
		let mahasiswa = await model.mahasiswa.destroy({
			where: {
				nim: req.params.nim,
			},
		});

		res.status(200).json({
			message: "Data Mahasiswa Berhasil Dihapus",
			data: mahasiswa,
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

module.exports = controller;
