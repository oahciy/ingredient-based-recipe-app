const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");

// GET from cocktail API
// const getRecipes = asyncHandler(async (req, res) => {
//   //const { search } = req.query;
//   console.log("getRecipes");
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`;
//   const response = await fetch(url);
//   const data = await response.json();
//   res.json(data);
// });

const RecipesController = {
  All: async (req, res) => {
    // access drinks parameter
    const { drinks } = req.params;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinks}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    res.json(data);
  },
};

module.exports = RecipesController;

// module.exports = { getRecipes };
