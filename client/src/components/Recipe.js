import React from "react";
import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    getRecipe();
  });

  const getRecipe = async () => {
    console.log("start get recipe");
    const id = window.location.href.split("/").reverse()[0];
    const response = await axios.get(`http://localhost:9000/recipe/${id}`);
    setRecipe(response.data);
    console.log("end");
  };

  const getIngredients = () => {
    let ingredientsArray = [];
    for (let i = 0; i < 15; i++) {
      let strValue = "strIngredient" + i;
      console.log(strValue + "1");
      console.log(recipe);
      console.log(recipe.drinks[strValue] + "3");
      ingredientsArray.push(recipe.drinks[strValue]);
    }

    setContent(ingredientsArray.filter((ingredient) => ingredient !== null));
  };

  return (
    <div>
      <button onClick={getIngredients}>Get Ingredients</button>
      {console.log(recipe)}
      {console.log(recipe.drinks)}
      {console.log(recipe.drinks[0])}
      {/* {recipe.drinks?.map((recipe) => (
        <div> */}
          <h1>{recipe.drinks.strDrink}</h1>
          <p>{recipe.drinks.strInstructions}</p>
          <img src={recipe.drinks.strDrinkThumb} alt={recipe.drinks.strDrink} />
          <ul>
            {console.log(content)}
            {/* {content.map((ingredient) => (
              <div key={ingredient}>
                <li>{ingredient}</li>
              </div>
            ))} */}
          </ul>
    </div>
  );
}

export default Recipe;
