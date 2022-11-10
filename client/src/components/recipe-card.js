import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

function RecipeCard({ recipe, search }) {
  return (
    <div className="card mb-4 grow shadow-lg mb-5 bg-white rounded" key={recipe.idDrink}>
      <Link to={`/recipe/${recipe.idDrink}`} style={{ textDecoration: "none" }}>
        <img
          src={recipe.strDrinkThumb}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5
            className="card-title Recipe-card-header recipe-dark-brown"
          >
            {recipe.strDrink}
          </h5>
          <p className="card-text recipe-dark-moss ">
            {recipe.missingIngredients} ingredients missing
          </p>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
