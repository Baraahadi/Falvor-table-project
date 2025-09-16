require("dotenv").config();
const express = require("express"); // import express
const axios = require("axios");
const path = require("path");
const cors = require("cors");
// const { json } = require("body-parser");
// const API_KEY = process.env.API;
const app = express(); // create express app to build our server with related router , middlewares
app.use(cors());
const port = process.env.PORT; // import port variable from .env file
const pool = require('./db/pgConnections'); // import pool class to manage DB 
app.use(express.static(path.join(__dirname, "public")));
// app.get("/style.css", (req, res) => {
//   res.sendFile(path.join(__dirname, "style.css"));
// });
// app.get("/app.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "app.js"));
// });
// front end side to redirect home page to the default index.js
app.get("/", (req,res)=>{
  try {
   res.sendFile(path.join(__dirname, "./public/index.html"));
  } catch (error) {
   console.log('failed to path redirect');
  }
});
const randomRecipes= require('./routes/randomRecipes');
const searchRecipes= require("./routes/searchRecipes");
app.use("/recipes", randomRecipes);
app.use("/recipes", searchRecipes);
// check the DB connections then running the server on the port came from .env file
pool.connect().then(()=>{app.listen(3000, ()=> console.log(`App is listening on port http://localhost:${port}`))});


