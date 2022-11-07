import React from "react";
import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import axios from "axios";
// import  { Link } from "react-router-dom";

function Recipe() {
  const [drink, setRecipe] = useState([]);
  const [content, setContent] = useState([]);

  const getRecipe = async () => {
    const id = window.location.href.split("/").reverse()[0];
    const response = await axios.get(`http://localhost:9000/recipe/${id}`);
    const drink = response.data.drinks[0]
    setRecipe(drink);

    let ingredientsArray = [];
    for (let i = 1; i <= 15; i++) {
      if (drink[`strIngredient${i}`] !== null) {
        const drinkPriceResponse = await getIngredientFromDb(drink[`strIngredient${i}`])
        console.log(drinkPriceResponse.data)
        ingredientsArray.push([drink[`strIngredient${i}`], drink[`strMeasure${i}`], drinkPriceResponse.data.priceUnit, drinkPriceResponse.data.trolleyLink]);
        // ingredientsArray.push(`${drink[`strIngredient${i}`]} ${drink[`strMeasure${i}`]} buy for £${drinkPriceResponse.data.priceUnit}`);
      }
    }
    setContent(ingredientsArray);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const getIngredientFromDb = async (item) => {
    const response = await axios.get(`http://localhost:9000/ingredient/${item}`)
    console.log(response)
    return response
  };

  return (
    <div>
      <div><img src={drink.strDrinkThumb} alt="Cocktail thumbnail"></img></div>
      <div><h3>{drink.strDrink}</h3></div>
      {content.map((ingredient) => (
        <div key={ingredient}>
          {/* {getIngredientFromDb("rum")} */}
          {/* <Link to={`/recipe/${recipe.idDrink}`} style={{ textDecoration: "none" }}></Link> */}
          {/* <li>{ingredient[0]} {ingredient[1]} <Link to={`https://www.trolley.co.uk/search/?from=search&q=${ingredient[0]}`} style={{ textDecoration: "none" }}>buy for £{ingredient[2]}</Link> </li> */}
          <li>{ingredient[0]} {ingredient[1]} <a href={`${ingredient[3]}`}>buy for £{ingredient[2]}</a></li>
        </div>
      ))}
      <div>{drink.strInstructions}</div>
    </div>
  );
}

export default Recipe;