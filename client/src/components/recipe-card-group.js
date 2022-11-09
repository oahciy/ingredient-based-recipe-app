import RecipeCard from "./recipe-card";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import searchResult from './SearchResult';

function RecipeCardGroup() {
  const { recipes, setRecipes } = useOutletContext();
  const { search, setSearchQuery } = useOutletContext();

  const background = {
    background: "#86b0b3",
  };

  // const [missing, setMissing] = useState(0);

  // const countMissing = async (recipe) => {
  //   let count = 0;
    
  //   const response = await axios.get(
  //     `http://localhost:9000/recipe/${recipe.idDrink}`
  //   );
    
  //   const drink = response.data.drinks[0];
  //   for (let i = 1; i < 16; i++) {
  //     const ingredientExists = new RegExp(
  //       "^" + `${drink[`strIngredient${i}`] + "$"}`,
  //       "i"
  //     );
  //     if (drink[`strIngredient${i}`] !== null) {
  //       if (!search.some((ingredient) => ingredientExists.test(ingredient))) {
  //         count++;
  //       }
  //     }
  //   }
  // //   await setMissing(count);
  // };

  // useEffect(() => {
  //   countMissing(recipe);
  // }, []);
  
  const setMissingIngredients = async (recipes) => {
    recipes.map((recipe, ind) => {
      console.log(ind)
      return ind
      // let count = 0;
    
      // const response = await axios.get(
      //   `http://localhost:9000/recipe/${recipe.idDrink}`
      // );
      
      // const drink = response.data.drinks[0];
      // for (let i = 1; i < 16; i++) {
      //   const ingredientExists = new RegExp(
      //     "^" + `${drink[`strIngredient${i}`] + "$"}`,
      //     "i"
      //   );
      //   if (drink[`strIngredient${i}`] !== null) {
      //     if (!search.some((ingredient) => ingredientExists.test(ingredient))) {
      //       count++;
      //     }
      //   }
      // }
      // recipe.ingredientsMissing = count
      // return recipe
    })
  }
  const recipesWithMissingIngredients = setMissingIngredients(recipes)
  // const recipesWithMissingIngredients = recipes.map((recipe, ind) => {
  //   let count = 0;
    
  //   const response = await axios.get(
  //     `http://localhost:9000/recipe/${recipe.idDrink}`
  //   );
    
  //   const drink = response.data.drinks[0];
  //   for (let i = 1; i < 16; i++) {
  //     const ingredientExists = new RegExp(
  //       "^" + `${drink[`strIngredient${i}`] + "$"}`,
  //       "i"
  //     );
  //     if (drink[`strIngredient${i}`] !== null) {
  //       if (!search.some((ingredient) => ingredientExists.test(ingredient))) {
  //         count++;
  //       }
  //     }
  //   }
  //   recipe.ingredientsMissing = countMissing(recipe)
  //   return recipe
  // })

  // const promises = Promise.all(recipesWithMissingIngredients)
  // .then(results => {
  //     console.log(results)
  // })
  // .catch(err => {
  //     // Handle error
  // });

  return (
    <div className="album py-5 background-gradient">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {recipes?.slice(0, 20).map((recipe) => (
            // {console.log(recipe)}
            <div className="col-9 col-md-6 col-lg-3" key={recipe.idDrink}>
              <RecipeCard recipe={recipe} search={search} />
              {console.log(recipe)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeCardGroup;
