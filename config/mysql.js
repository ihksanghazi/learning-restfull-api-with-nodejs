var mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "kuliah",
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Koneksi Berhasil");
});
