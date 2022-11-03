import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import Recipe from './components/Recipe';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* currently the homepage is rendered using React component SearchBar, could be changed later */}
          <Route index element={<SearchBar />} />
          <Route path="recipe/:id" element={<Recipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
