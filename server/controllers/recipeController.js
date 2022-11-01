const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");

// GET from cocktail API
const getRecipes = asyncHandler(async (req, res) => {
  //const { search } = req.query;
  console.log("getRecipes");
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

module.exports = { getRecipes };
