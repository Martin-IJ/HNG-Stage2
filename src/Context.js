import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovie = async () => {
    const apiKey = "f0a13e0071eef42c2bfec2cc0723d3ab";
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const first10Movies = data.results.slice(0, 10);
      setMovies(first10Movies);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  console.log(movies);

  useEffect(() => {
    fetchMovie();
  }, []);

  // Search for movies
  const fetchSearch = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&query=${searchText}&include_adult=false`
      );
      const { results } = await data.json();
      setContent(results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch(searchText);
  };

  const Trigger = (e) => {
    setSearchText(e.target.value);
  };

  const Search = () => {
    fetchSearch();
  };

  return (
    <AppContext.Provider value={{ loading, movies, Search, Trigger, content, handleSubmit, searchText }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
