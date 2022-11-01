// requires
const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

/* GET recipes listing. */
router.get("/", recipeController.getRecipes);

module.exports = router;
