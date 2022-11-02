import SearchBar from "./components/SearchBar";
import {BrowserRouter as Router, Link} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <header className="App-header"></header>
      <h1>FirstLoad</h1>
      <Router path="/" element={<SearchBar />}>
        <SearchBar />
      </Router>
    </div>
  );
}

export default App;
