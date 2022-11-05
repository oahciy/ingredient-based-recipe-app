const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");

/* GET ingredient data */
router.get("/:strIngredient", ingredientController.FindByName);

module.exports = router;