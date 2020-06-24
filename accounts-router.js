const express = require("express")
const db = require("./data/dbConfig")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		// translates to `SELECT * FROM "messages";`
		const names = await db.select("*").from("accounts")

		res.json(names)
	} catch (err) {
		next(err)
	}
})

module.exports = router