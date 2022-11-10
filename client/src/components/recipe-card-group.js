import RecipeCard from "./recipe-card";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeCardGroup() {
  const { recipes, setRecipes } = useOutletContext();
  const { search, setSearchQuery } = useOutletContext();

  const background = {
    background: "#86b0b3",
  };


  // const [allDrinks, setDrinks] = useState(0);

  // const fetchDrinks = async () => {
  //   let drinksList = []
  //   for (let i = 0; i < 10; i++) {
  //     console.log('hey')
  //     const idDrink = recipes[i].idDrink
  //     const response = await axios.get(
  //       `http://localhost:9000/recipe/${idDrink}`
  //     );
  //     console.log(response)
  //     const drink = response.data.drinks[0];
  //     console.log(drink)
  //     drinksList.push(drink)
  //     // console.log(drinksList)
  //   }
    
  //   setDrinks(allDrinks);
  // };

  // useEffect(() => {
  //   fetchDrinks();
  // }, []);

  // sortRecipeArray()
  return (
    <div className="album py-5 background-gradient-grey">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {recipes?.slice(0, 20).map((recipe) => (
            <div
              className="col-9 col-md-6 col-lg-3"
              id={`${recipe.idDrink}`}
              key={recipe.idDrink}
            >
              <RecipeCard recipe={recipe} search={search} />
              {/* {console.log("this is recipe card group")}
              {console.log(recipes)} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeCardGroup;
// import RecipeCard from "./recipe-card";
// import { useOutletContext } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// // import searchResult from './SearchResult';

// const RecipeCardGroup = async () => {
//   const { recipes, setRecipes } = useOutletContext();
//   const { search, setSearchQuery } = useOutletContext();

//   const background = {
//     background: "#86b0b3",
//   };

//   // useEffect(() => {
//   //   fetchDrinksData();
//   // }, []);

//   // const fetchDrinksData = () => {
//   //   for (let i = 0; i < recipes.length; i++) {
//   //     console.log(recipes)
//   //   }
//   // }

//   // const [drink, setDrink] = useState([])

//   // useEffect( (recipe) => { 
//   //   async function fetchData() {
//   //     try {
//   //     const response = await axios.get(
//   //       `http://localhost:9000/recipe/${recipe.idDrink}`
//   //     );
//   //     setDrink(response.data.drinks[0])
//   //   } catch (err) {
//   //       console.log(err);
//   //     }
//   //   }
//   //   fetchData();
//   // }, []);



//   // const countMissing = async (recipe) => {
//   //   let count = 0;
    
//   //   const response = await axios.get(
//   //     `http://localhost:9000/recipe/${recipe.idDrink}`
//   //   );
    
//   //   const drink = response.data.drinks[0];
//   //   for (let i = 1; i < 16; i++) {
//   //     const ingredientExists = new RegExp(
//   //       "^" + `${drink[`strIngredient${i}`] + "$"}`,
//   //       "i"
//   //     );
//   //     if (drink[`strIngredient${i}`] !== null) {
//   //       if (!search.some((ingredient) => ingredientExists.test(ingredient))) {
//   //         count++;
//   //       }
//   //     }
//   //   }

//   //   // await setMissing(count);
//   //   return count
    
//   // };
//   // const recipesWithMissing = await Promise.all(recipes.map(async recipe => recipe.ingredientsMissing = await countMissing(recipe)))


//   return (
//     <div className="album py-5 background-gradient">
//       <div className="container">
//         <div className="row d-flex justify-content-center">
//           {recipes?.slice(0, 20).map((recipe) => (
//             <div
//               className="col-9 col-md-6 col-lg-3"
//               id={`${recipe.idDrink}`}
//               key={recipe.idDrink}
//             >
//               <RecipeCard recipe={recipe} search={search} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeCardGroup;

// [1,2,3]
// [1,2,3,6,7,8]
// [1,2,7]
// [1,2,6,7,8,9]

// [1,6]

