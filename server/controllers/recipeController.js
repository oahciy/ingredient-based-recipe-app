const fetch = require("node-fetch");
require("dotenv").config();

const RecipesController = {
  All: async (req, res) => {
    // access drinks parameter
    const { drinks } = req.params;
    const url = `https://www.thecocktaildb.com/api/json/v2/${process.env.COCKTAIL_API}/filter.php?i=${drinks}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    res.json(data);
  },
};

module.exports = RecipesController;

// module.exports = { getRecipes };
