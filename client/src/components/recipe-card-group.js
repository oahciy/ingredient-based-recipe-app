import RecipeCard from "./recipe-card";
import { useOutletContext } from "react-router-dom";

function RecipeCardGroup() {
  const { recipes, setRecipes } = useOutletContext();
  const { search, setSearchQuery } = useOutletContext();

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeCardGroup;
