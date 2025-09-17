const express = require("express");
const pool = require("../db/pgConnections");
const bcrypt = require("bcrypt");
const router = express.Router();
router.post("/register", async (req, res) => {

  const { fullname, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userInformation = await pool.query(
      "INSERT INTO users (fullname ,email , password) VALUES ($1, $2 , $3 ) RETURNING id, fullname , email ",
      [fullname, email, hashedPassword]
    );
    res.status(201).json(userInformation.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("the user already exist");
  }
});
module.exports = router;
// postman body test 
// {
//    "fullname" : "nena",
//    "email": "nena@baraa.com",
//     "password": "123456"
// }