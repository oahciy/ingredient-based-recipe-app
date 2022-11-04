const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");

/* GET ingredient data */
router.get("/ingredient/rum", ingredientController.FindByName);

module.exports = router;