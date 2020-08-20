const express = require("express");

const db = require("../data/dbConfig.js");
const router = require("../new-accounts-router")

const server = express();
server.use(router);

server.use(express.json());

module.exports = server;
