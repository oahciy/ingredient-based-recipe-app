import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Recipe from './components/Recipe';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* currently the homepage is rendered using React component SearchBar, could be changed later */}
          <Route index element={<><Navbar /><SearchBar /></>} />
          <Route path="recipe/:id" element={<Recipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
