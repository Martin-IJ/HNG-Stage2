import "./App.css";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
