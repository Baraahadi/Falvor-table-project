require("dotenv").config();
const express = require("express"); // import express
const axios = require("axios");
const path = require("path");
const cors = require("cors");
const app = express(); // create express app to build our server with related router , middlewares
app.use(express.json()); // it pasre Json request body
app.use(cors());
const port = process.env.PORT || 3000; // import port variable from .env file
const pool = require('./db/pgConnections'); // import pool class to manage DB 


app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req,res)=>{
  try {
   res.sendFile(path.join(__dirname, "./public/index.html"));
  } catch (error) {
   console.log('failed to path redirect');
  }
});

const randomRecipes= require('./routes/randomRecipes');
const searchRecipes= require("./routes/searchRecipes");
const updateRecipes = require("./routes/updateRecipes");
const userregister= require("./routes/register");
const userAuthentication= require("./routes/login");
app.use("/recipes", randomRecipes);
app.use("/recipes", searchRecipes);
app.use("/recipes",updateRecipes)
app.use("/user",userregister);
app.use("/user",userAuthentication);
// check the DB connections then running the server on the port came from .env file

app.listen(port, () => console.log(`Server running on port ${port}`));


