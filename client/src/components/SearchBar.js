import React from "react";
import { useState } from "react";
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

  const searchBackground = {
    background: `url(${BackgroundImage}) no-repeat center center/cover`,
    height: "270px",
  };

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
                type="text"
                placeholder="Search for a recipe"
                onChange={(e) => setSearch(e.target.value)}
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
                  style={{
                    backgroundColor: "#20577b",
                    borderColor: "#20577b",
                  }}
                  onClick={getRecipes}
                >
                  Search
                </button>
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center m-2">
            {search?.map((item) => (
              <div
                className=""
                key={item}
                onClick={() => removeSearchItem(item)}
              >
                <SearchItemButton item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet context={{ recipes, setRecipes, search, setSearchQuery }} />
    </>
  );
}

export default SearchBar;
