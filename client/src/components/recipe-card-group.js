import RecipeCard from './recipe-card';
// import searchResult from './SearchResult';

function RecipeCardGroup(props) {
  console.log(props.recipe)
  return (
    

          <div className="col-md-3" key={props.recipe.idDrink}>
            <RecipeCard name={props.recipe.strDrink} img={props.recipe.strDrinkThumb} id={props.recipe.idDrink}/>
          </div>

  )
}

export default RecipeCardGroup