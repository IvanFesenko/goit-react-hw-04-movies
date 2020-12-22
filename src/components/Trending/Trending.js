import { useState, useEffect } from 'react';

import API from '../../services/TMDB';
import STATUS from '../../services/Status';

import MoviesList from '../MoviesList/MoviesList';
import NotFound from '../NotFound/NotFound';

function Trending() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.pending);

  useEffect(() => {
    const getData = async () => {
      try {
        const { results } = await API.getTrending();
        setMovies(results);
        setStatus(STATUS.fulfilled);
      } catch (error) {
        console.error(error);
        setStatus(STATUS.rejected);
      }
    };

    getData();
  }, []);

  if (status === STATUS.rejected) {
    return <NotFound />;
  }
  return <>{status === STATUS.fulfilled && <MoviesList movies={movies} />}</>;
}

export default Trending;
