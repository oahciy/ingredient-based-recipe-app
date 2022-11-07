

const axios = require('axios')
const cheerio = require("cheerio");


const fetchPrice = async (item) => {
   try {
        const response = await axios.get(`https://www.trolley.co.uk/search/?from=search&q=${item}`);
        const html = response.data;

        const $ = cheerio.load(html);
        const prices = [];

      $('div._info').each((_idx, el) => {

           const shelf = $(el)
           const price = shelf.find('div._price').text()
           prices.push(price)
       });



       return prices;
   } catch (error) {
       throw error;
   }
};

module.exports = fetchPrice;


// fetchPrice("cider").then((prices) => {
//   const topFivePrices = prices.slice(0, 5).map(priceString => priceString.split(' '))
//   const sortedTopFivePrices = topFivePrices.sort((a, b) => {
//     if (a[2] < b[2]) return -1;
//     if (a[2] > b[2]) return 1;
//     return 0
//   })
//   const medianPrice = sortedTopFivePrices[2]
//   console.log(sortedTopFivePrices)
//   console.log(medianPrice);
// });
  

// [0].split(' ')[2])

// Comparator(a, b) {
//   if (a[1] < b[1]) return -1;
//   if (a[1] > b[1]) return 1;
//   return 0;
// }