import { useState, useEffect } from 'react';

import API from '../../services/TMDB';

// import s from './MoviesSearch.module.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';

function MoviesSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      return;
    }
    const getData = async () => {
      try {
        const { results } = await API.searchMovies(query);
        if (results.length > 0) {
          setMovies(results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const onSearch = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSearch={onSearch} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}

export default MoviesSearch;
