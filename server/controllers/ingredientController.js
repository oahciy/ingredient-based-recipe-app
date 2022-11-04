const Ingredient = require('../models/ingredient')
const mongoose = require("mongoose");



const IngredientController = {
  FindByName: async (req, res) => {
    const paramIngrw = req.params.blabla.toLowerCase();
    // const ingredient = await Ingredient.findOne({ strIngredient: `${req.params.blabla}` });
    const ingredient = await Ingredient.findOne({ strIngredient: `Triple Sec` });

    res.json(ingredient);
    // console.log("hey2")
    // const ingredient = await Ingredient.findOne({'strIngredient': 'rum' });
    // console.log(ingredient)
    // res.json(ingredient);
  },
    
};

module.exports = IngredientController;