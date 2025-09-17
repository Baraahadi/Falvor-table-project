const express = require("express");
const pool = require("../db/pgConnections");
const router = express.Router();

router.put("/recipes/:id", async (req, res) => {
  const { id } = req.params; 
  const { title, image, ingredients, instructions } = req.body;

  try {
    const result = await pool.query(
      `UPDATE recipes 
       SET title = $1, image = $2, ingredients = $3, instructions = $4
       WHERE id = $5 RETURNING *`,
      [title, image, ingredients, instructions, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(result.rows[0]); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating recipe");
  }
});

module.exports = router;
