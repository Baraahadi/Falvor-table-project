require("dotenv").config();
const express = require("express");
const pool = require("../db/pgConnections");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userInfo = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    const userInfoFromDB = userInfo.rows[0];
    const passwordCheck = bcrypt.compare(password, userInfoFromDB.password);
    if (!passwordCheck) return res.status(401).send("Invalid password");
    const token = jwt.sign(
      { id: userInfoFromDB.id, email: userInfoFromDB.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send("error logging the user");
  }
});
module.exports = router;
// { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoic2FyYUBiYXJhYS5jb20iLCJpYXQiOjE3NTgwMjY5NjQsImV4cCI6MTc1ODExMzM2NH0.UmsC1Y-OgJnz_an89e0idWx3TdUVgrs18eDv2rPGU7E" }
