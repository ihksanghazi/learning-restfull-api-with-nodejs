const axios = require("axios");
const controller = {};

controller.getAll = async function (req, res) {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		// console.log(response);
		if (response.data.length > 0) {
			res.status(200).json({
				message: "Data Dari Public Api",
				data: response.data,
			});
		} else {
			res.status(200).json({
				message: "Tidak Ada Data",
				data: [],
			});
		}
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

module.exports = controller;
