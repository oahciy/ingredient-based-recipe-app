import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import SearchItemButton from "./SearchItemButton";
import BackgroundImage from '../img/background-image.png' 


function SearchBar() {
  // onClick gets all recipes
  const [searchWord, setSearch] = useState("");
  const [search, setSearchQuery] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    if (search.length > 0) {
      const parameters = search.map((word) => word.replace(" ", "_"));
      const response = await axios.get(
        `http://localhost:9000/recipes/${parameters}`
      );
      setRecipes(response.data);
    } else if (searchWord.length > 0) {
      const parameter = searchWord.replace(" ", "_");
      const response = await axios.get(
        `http://localhost:9000/recipes/${parameter}`
      );
      setRecipes(response.data);
    }
  };

  const removeSearchItem = (item) => {
    const newSearch = search.filter((word) => word !== item);
    setSearchQuery(newSearch);
  };

  const addSearchWord = () => {
    // clear search bar with document query selector
    document.querySelector(".input-field").value = "";
    // add the search word to the search array if it's not there yet
    if (!search.includes(searchWord)) {
      const updatedSearch = search.push(searchWord);
      setSearch(updatedSearch);
    }
  };

  return (
    <div className="search-elements">
      <div className="container">
        <div className="search-bar text-center search-background" style={{backgroundImage: `url(${BackgroundImage})`}}>
          <br /><br /><br />
          <div>
            <form>
              <div class="row">
                <div class="col-1"></div>
                <div class="col-8">
                  <input
                    className="input-field form-control"
                    type="text"
                    placeholder="Search for a recipe"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div class="col-1">
                  <button
                    className="add-button mx-2 btn btn-primary"
                    style={{backgroundColor: '#20577b', borderColor: '#20577b'}}
                    onClick={addSearchWord}
                  >
                    Add
                  </button>
                </div>
                <div class="col-1">
                  <button 
                    className="search-button btn btn-primary" 
                    style={{backgroundColor: '#20577b', borderColor: '#20577b'}}
                    onClick={getRecipes}
                  >
                    Search
                  </button>
                </div>
                <div class="col-1"></div>
              </div>
            </form>
            <br /><br /><br />
          </div>
          
          {/* <div className="search-items text-center">
            <div className="d-flex">
              {search?.map((item) => (
                <div
                  className="p-2"
                  key={item}
                  onClick={() => removeSearchItem(item)}
                >
                  <SearchItemButton item={item} />
                </div>
              ))}
            </div>
          </div>
          {recipes.drinks?.map((recipe) => (
            <div key={recipe.idDrink}>
              <h1><Link to={`/recipe/${recipe.idDrink}`}>{recipe.strDrink}</Link></h1>
              <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
            </div>
          ))} */}
        </div>
      </div>
    </div>





        

  );
}

export default SearchBar;
