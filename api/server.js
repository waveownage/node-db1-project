const express = require("express");

const db = require("../data/dbConfig.js");
const router = require("../new-accounts-router")

const server = express();

server.use(express.json());

server.use(router);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;
