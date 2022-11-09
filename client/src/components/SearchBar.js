import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchItemButton from "./SearchItemButton";
import BackgroundImage from "../img/sb1.png";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./NavBar";

function SearchBar() {
  // onClick gets all recipes
  const [searchWord, setSearch] = useState("");
  const [search, setSearchQuery] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadAllIngredients = async () => {
      const response = await axios.get(
        `http://localhost:9000/ingredient/returnAllIngredients`
      );
      setIngredients(response.data);
    };
    loadAllIngredients();

    const el = document.getElementById('search-box');

    el.addEventListener('keydown', e => {
      if(e.key === 'Enter'){
        
        const typedSearchWord = document.querySelector(".input-field").value

        if (!search.includes(typedSearchWord) && typedSearchWord.length > 0) {
          const updatedSearch = search.push(typedSearchWord);
          setSearch(updatedSearch);
        } 
        getRecipes()
        document.querySelector(".input-field").value = ''
      }
    })

  }, []);



  const getRecipes = async () => {
    if (search.length > 0) {
      const parameters = search.map((word) => word.replace(" ", "_"));
      const response = await axios.get(
        `http://localhost:9000/cocktail/getall/${parameters}`
      );
      if (response.data !== null) {
        
        setRecipes(response.data);
      }
    } else if (searchWord.length > 0) {
      const parameter = searchWord.replace(" ", "_");
      const response = await axios.get(
        `http://localhost:9000/cocktail/getall/${parameter}`
      );
      if (response.data !== null) {
        setRecipes(response.data);
      }
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

  const searchBackground = {
    background: `url(${BackgroundImage}) no-repeat center center/cover`,
    height: "270px",
  };

  const suggestIngredients = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = ingredients.filter((ingredient) => {
        const regex = new RegExp("^" + text, "gi");
        return ingredient.strIngredient.match(regex);
      });
      // sort by popularity
      matches.sort((a, b) => {
        return b.ingredientPopularity - a.ingredientPopularity;
      });
    }
    setSearch(text);
    setSuggestions(matches.slice(0, 5));
  };

  const addFromSuggestion = (item) => {
    // add the search word to the search array if it's not there yet
    if (!search.includes(item)) {
      const updatedSearch = search.push(item);
      setSearch(updatedSearch);
    }
    document.querySelector(".input-field").value = "";
  };


  const sortRecipeArray = () => {
    
    for (let i = 0; i < recipes.length; i++) {
      const recipeIngredients = []
      for (let j=1; j<= 15; j++) {
        if (recipes[i][`strIngredient${j}`] !== null) {
          recipeIngredients.push(recipes[i][`strIngredient${j}`])
        }
      }
      

      var allUniqueIngredients = recipeIngredients.concat(search.filter((item) => recipeIngredients.indexOf(item) < 0));

      const numberOfOverlapping = search.length + recipeIngredients.length - allUniqueIngredients.length

      const missingIngredients = allUniqueIngredients.length - search.length
       
      recipes[i].ingredientsArray = recipeIngredients
      recipes[i].numberOfOverlapping = numberOfOverlapping
      recipes[i].missingIngredients = missingIngredients
      console.log("hey")
      console.log(recipes[i])
    }

    // array of how many ingredients are in common
    // const numberOfOverlappingArray = recipes.map((recipe) => recipe.numberOfOverlapping)
    return recipes
  }


  return (
    <>
      <div
        className="search-bar d-flex search-background"
        style={searchBackground}
      >
        <div className="container">
          <Navbar />
          <div className="row centre-search">
            <div className="col-md-8 p-2">
              <input
                className="input-field form-control inputbox-transparent"
                id = "search-box"
                type="text"
                placeholder="Search for a recipe"
                onChange={(e) => suggestIngredients(e.target.value)}
              />
            </div>
            <div className="col-1 m-2">
              <button
                className="add-button btn btn-primary"
                style={{ backgroundColor: "#20577b", borderColor: "#20577b" }}
                onClick={addSearchWord}
              >
                Add
              </button>
            </div>
            <div className="col-1 m-2">
              <Link to="/recipes">
                <button
                  className="search-button btn btn-primary"
                  id="search-button"
                  style={{
                    backgroundColor: "#20577b",
                    borderColor: "#20577b", 
                  }}
                  onClick = {getRecipes}
                >
                  Search
                </button>

              </Link>
            </div>
          </div>
          <div className="m-2">
            <div className="row d-flex justify-content-around">
              <div className="col-6">
                {suggestions.map((suggestion, i) => (
                  <button
                    className="search-item-button add-button m-2 btn btn-primary"
                    style={{
                      backgroundColor: "#25aec9",
                      borderColor: "#25aec9",
                    }}
                    onClick={() => {
                      addFromSuggestion(suggestion.strIngredient);
                    }}
                    key={`suggestion${i}`}
                  >
                    {suggestion.strIngredient}
                  </button>
                ))}
              </div>
              <div className="col-6">
                {search?.map((item) => (
                  <div
                    className="d-inline"
                    key={item}
                    onClick={() => removeSearchItem(item)}
                  >
                    <SearchItemButton item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet context={{ recipes, setRecipes, search, setSearchQuery }} />
    </>
  );
}

export default SearchBar;

// Sorting strategy

// [1,2,3] - search

// [2,5,8,9,3] - recipe 1 - overlap is [2, 3] - length is 2, missing ingredients ingredients.length - overlap.length (3)

// [2,6,7] - recipe 2 - overlap is [2] - length is 1, missing ingredients ingredients.length - overlap.length (2)

// [1,2,3,4,7,9] - recipe 3 - overlap is [1,2,3] - length is 3, missing ingredients ingredients.length - overlap.length (3)

// [2,5,8,3] - recipe 4 - overlap is [2, 3] - length is 2, missing ingredients ingredients.length - overlap.length (2)

// sorting: 3, 4, 1, 2