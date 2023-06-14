const Sequelize = require("sequelize");
const db = require("../database/mysql");
const jurusan = require("./jurusan");

var mahasiswa = db.define(
	"mahasiswa",
	{
		nim: { type: Sequelize.INTEGER, primaryKey: true },
		nama: Sequelize.STRING,
		kd_jurusan: Sequelize.STRING,
		angkatan: Sequelize.INTEGER,
		kota: Sequelize.STRING,
		foto: Sequelize.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

mahasiswa.hasOne(jurusan, { foreignKey: "kd_jurusan" });
mahasiswa.belongsTo(jurusan, { foreignKey: "kd_jurusan" });

mahasiswa.removeAttribute("id");
module.exports = mahasiswa;
