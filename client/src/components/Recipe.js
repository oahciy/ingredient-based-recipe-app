import React from "react";
import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

function Recipe() {
  const [recipe, setRecipe] = useState([]);

  const getRecipe = async () => {
    const id = window.location.href.split("/").reverse()[0];
    const response = await axios.get(`http://localhost:9000/recipe/${id}`);
    setRecipe(response.data);
  };

  const getIngredients = () => {
    let content = [];
    for (let i = 0; i < 15; i++) {
      let strValue = "strIngredient" + i;
      content.push(<li>{recipe.drinks.strValue}</li>);
    }
  }

  return (
    <div>
      <button onClick={getRecipe}>get recipe</button>
      <button onClick={getIngredients}>get ingredients</button>
      {recipe.drinks?.map((recipe) => (
          <div>
            <h1>{recipe.strDrink}</h1>
            <p>{recipe.strInstructions}</p>
            <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
            <ul></ul>
          </div>
        ))}
    </div>
  );
}

export default Recipe;
