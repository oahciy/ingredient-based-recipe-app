import RecipeCard from "./recipe-card";
import { useOutletContext } from "react-router-dom";
// import searchResult from './SearchResult';

function RecipeCardGroup() {
  const { recipes, setRecipes } = useOutletContext();
  const { search, setSearchQuery } = useOutletContext();

  const background = {
    background: "#86b0b3",
  };

  return (
    <div className="album py-5 background-gradient">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {recipes.drinks?.map((recipe) => (
            <div className="col-9 col-md-6 col-lg-3" key={recipe.idDrink}>
              <RecipeCard recipe={recipe} search={search} />
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="col-md-3" key={props.recipe.idDrink}>
    // <RecipeCard name={props.recipe.strDrink} img={props.recipe.strDrinkThumb} id={props.recipe.idDrink}/>
    // </div>
  );
}

export default RecipeCardGroup;
