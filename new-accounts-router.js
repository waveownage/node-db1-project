const express = require("express");
const db = require("./data/dbConfig");

const router = express.Router();

//GET all accounts

router.get("/", async (req, res, next) => {
    try {
      const accounts = await db.select("*").from("accounts");
  
      res.json(accounts);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;

