const Sequelize = require("sequelize");
const db = require("../database/mysql");

var mahasiswa = db.define(
	"mahasiswa",
	{
		nim: Sequelize.INTEGER,
		nama: Sequelize.STRING,
		kd_jurusan: Sequelize.STRING,
		angkatan: Sequelize.INTEGER,
		kota: Sequelize.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

mahasiswa.removeAttribute("id");
module.exports = mahasiswa;
