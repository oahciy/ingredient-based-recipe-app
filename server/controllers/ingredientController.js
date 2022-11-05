const Ingredient = require('../models/ingredient')
const mongoose = require("mongoose");



const IngredientController = {
  FindByName: async (req, res) => {
    console.log("hey2")
    const ingredient = await Ingredient.findOne({'strIngredient': 'rum' });
    console.log(req.params.strIngredient)
    res.json(ingredient);
  },
    
};

module.exports = IngredientController;