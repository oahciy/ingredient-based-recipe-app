import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/collapse"
import "./App.css";

import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Recipe from "./components/Recipe";
import RecipeCardGroup from "./components/recipe-card-group";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Navbar /> */}
              <SearchBar />
              <Footer />
            </>
          }
        >
          {/* currently the homepage is rendered using React component SearchBar, could be changed later */}
          <Route path="/" element={<RecipeCardGroup />} />
          <Route path="recipes" element={<RecipeCardGroup />} />
          <Route path="recipe/:id" element={<Recipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
