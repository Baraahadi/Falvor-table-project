const express = require("express");
const router= express.Router();
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");
const API_Key = process.env.API;

router.get('/search', async (req,res)=>{
  
try {
    const { ingredients } = req.query;
      if (!ingredients) {
      return res.status(400).json({ error: "ingredients query parameter is required" });
    }
    const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients',{

      params: {
        ingredients,       
        number: 3,         
        apiKey: API_Key,
      },
    });
    const result = response.data.map(recipe => ({
      title: recipe.title,
      image: recipe.image,
      usedIngredients: recipe.usedIngredients.map(i => i.name),
      missedIngredients: recipe.missedIngredients.map(i => i.name),
    }));

    res.json(result);    
} catch (error) {

   console.error(error.message);
    res.status(500).json({ error: "Failed to fetch recipes" });
}
});

module.exports = router;;