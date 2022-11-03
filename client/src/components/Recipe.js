import React from "react";
import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

function Recipe() {
  const [drink, setRecipe] = useState([]);
  const [content, setContent] = useState([]);

  // const getIngredients = () => {
  //   let ingredientsArray = [];
  //   for (let i = 0; i < 15; i++) {
  //     // loop over the ingredients in recipe.drink[0]
  //     if (drink[`strIngredient${i}`] !== null) {
  //       ingredientsArray.push(
  //         drink[`strIngredient${i}`] +
  //           " " +
  //           drink[`strMeasure${i}`]
  //       );
  //     }
  //   }
  //   console.log("ingredients: " + ingredientsArray);
  //   setContent(ingredientsArray);
  // };

  const getRecipe = async () => {
    // console.log("start get recipe");
    const id = window.location.href.split("/").reverse()[0];
    const response = await axios.get(`http://localhost:9000/recipe/${id}`);
    const drink = response.data.drinks[0]
    setRecipe(drink);

    let ingredientsArray = [];
    for (let i = 1; i <= 15; i++) {
      // console.log(drink[`strIngredient${i}`])
      // loop over the ingredients in recipe.drink[0]
      if (drink[`strIngredient${i}`] !== null) {
        ingredientsArray.push(
          drink[`strIngredient${i}`] +
            " " +
            drink[`strMeasure${i}`]
        );
      }
    }
    // console.log("ingredients: " + ingredientsArray);
    setContent(ingredientsArray);
    
    
    // console.log("end");
  };

  useEffect(() => {
    getRecipe();
  }, []);





  // const getIngredients = () => {
  //   let ingredientsArray = [];
  //   for (let i = 0; i < 15; i++) {
  //     let strValue = "strIngredient" + i;
  //     console.log(strValue + "1");
  //     console.log(recipe);
  //     console.log(recipe.drinks[strValue] + "3");
  //     ingredientsArray.push(recipe.drinks[strValue]);
  //   }

  //   setContent(ingredientsArray.filter((ingredient) => ingredient !== null));
  // };
  return (
    <div>
      {console.log(drink)}
      {console.log(content)}
      <div><img src={drink.strDrinkThumb}></img></div>
      <div><h3>{drink.strDrink}</h3></div>
      {content.map((ingredient) => (
        <div key={ingredient}>
          <li>{ingredient}</li>
        </div>
      ))}
      <div>{drink.strInstructions}</div>
    </div>
  );
}

export default Recipe;
