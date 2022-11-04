const Ingredient = require('../models/ingredient')



const IngredientController = {
  FindByName: async (req, res) => {
    console.log("hey2")
    const ingredient = Ingredient.findOne({'strIngredient': 'rum' });
    console.log(ingredient)
    res.json(ingredient);
  },
    
};

module.exports = IngredientController;