const Ingredient = require('../models/ingredient')
const mongoose = require("mongoose");



const IngredientController = {
  FindByName: async (req, res) => {
    const searchParams = req.params.strIngredient.toLowerCase()
    const ingredient = await Ingredient.findOne({'strIngredient': searchParams });
    res.json(ingredient);
  },
    
};

module.exports = IngredientController;