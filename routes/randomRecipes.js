const express = require("express");
const router = express.Router();
const path = require("path");
const pool = require("../db/pgConnections")


router.get("/random",async (req,res)=>{
    try {
    const response = await pool.query("SELECT * FROM recipes LIMIT 6"); // fetch recipes from postgres
    res.json(response.rows); // to return the recipes on JSON format so it extract object from array 
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database query failed" });
  }
});

module.exports = router;