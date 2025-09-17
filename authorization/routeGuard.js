require("dotenv").config();
const jwt= require("jsonwebtoken");

function routeGuard(req,res,next){
    // get the token from req header 
    const tokenHeader= req.headers["authorization"]; // it will extract the array of ["bearer  token"] 
    const tokenFromHeader= tokenHeader && tokenHeader.split("")[1] // it will seperate the headers line in array of element with space then extract the second element which is the token i need [1]
    const tokenURL= req.query.token;
     
    const token = tokenFromHeader || tokenURL;
   if (!token) return res.status(401).send("Access denied. no token provided"); // if the token doesn't exist

   try {
        const validToken= jwt.config(token, process.env.JWT_SECRET); // check validation token
        res.userInfoFromDB = validToken; // user authorized successfully 
        next(); // move to the next middle ware or routes .. 
   } catch (error) {
    console.log(error);
    console.error(error);
    
        return res.status(403).send("invalid or expired token");

   }
}
module.exports = routeGuard;