const express = require("express");

const db = require("../data/dbConfig.js");
const router = require("../accounts-router");

const server = express();

server.use(express.json());
server.use(router);

module.exports = server;
