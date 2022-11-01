import React from "react";
import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import axios from "axios";

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
          <h1>{recipe.strDrink}</h1>
          <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
