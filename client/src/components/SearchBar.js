import React from "react";
import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import axios from "axios";
import {BrowserRouter as Router, Link} from 'react-router-dom';

function SearchBar() {
  // onClick gets all recipes
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:9000/recipes/${search}`);
    setRecipes(response.data);
  };

  return (
      <div>
        <input
          type="text"
          placeholder="Search for a recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getRecipes}>Search</button>
        {recipes.drinks?.map((recipe) => (
          <div key={recipe.idDrink}>
            <h1><Link to={`/recipe/${recipe.idDrink}`}>{recipe.strDrink}</Link></h1>
            <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
          </div>
        ))}
      </div>
  );
}

export default SearchBar;
