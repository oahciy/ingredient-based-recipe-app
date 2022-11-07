var mongoose = require("mongoose");
const Ingredient = require("./ingredient");
const fetch = require("node-fetch");
const fetchPrice = require('./scraping')
require("dotenv").config();


mongoose.connect("mongodb://0.0.0.0/recipe-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const findMedianPrice = (prices) => {
  const topFivePrices = prices.slice(0, 5).map(priceString => priceString.split(' '))
  const sortedTopFivePrices = topFivePrices.sort((a, b) => {
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
    return 0
  })
  return sortedTopFivePrices[2]
}

async function populateDatabase () {
  for (let i = 233; i <= 233; i++) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${i}`;

    const response = await fetch(url);
    const data = await response.json();
    
    if (data.ingredients !== null) {
      data.ingredients[0].strIngredient = data.ingredients[0].strIngredient.toLowerCase()
      const ingredientName = data.ingredients[0].strIngredient.toLowerCase().split(' ').join('+')
      data.ingredients[0].trolleyLink = `https://www.trolley.co.uk/search/?from=search&q=${ingredientName}`

      const priceList = await fetchPrice(ingredientName)
      const medianPrice = findMedianPrice(priceList)
      
      
      if (priceList.length === 0) {
        data.ingredients[0].priceItem = null
        data.ingredients[0].priceQuantity = null
        data.ingredients[0].priceUnit = null
 
      } else {
        const priceItem = Number(medianPrice[1].substring(1)).toFixed(2)
        const priceUnit = Number(medianPrice[2].substring(1)).toFixed(2)
        const priceQuantity = Number(medianPrice[4]).toFixed(2)
        // const priceUnit = Number(priceList[0].split(' ')[1].substring(1)).toFixed(2)
        // const priceItem = Number(priceList[0].split(' ')[2].substring(1)).toFixed(2)
        // const priceQuantity = priceList[0].split(' ')[4]
    
        data.ingredients[0].priceItem = priceItem
        data.ingredients[0].priceQuantity = priceQuantity
        data.ingredients[0].priceUnit = priceUnit
      }

      data.ingredients[0].lastUpdated = new Date

      const ingredient = new Ingredient(data.ingredients[0])

      ingredient.save(function(err, doc) {
        if (err) return console.error(err);
      });
    }
  }
}

populateDatabase()