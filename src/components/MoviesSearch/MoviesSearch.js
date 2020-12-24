import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

import API from '../../services/TMDB';
import STATUS from '../../services/Status';

import s from './MoviesSearch.module.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import NotFound from '../NotFound/NotFound';

function MoviesSearch() {
  const history = useHistory();
  const location = useLocation();
  const [status, setStatus] = useState(STATUS.idle);
  const [query, setQuery] = useState(
    new URLSearchParams(location.search).get('query') ?? '',
  );
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    if (!query.trim()) {
      return;
    }
    const getData = async () => {
      try {
        const { results, total_pages } = await API.searchMovies(query, page);
        if (results.length > 0) {
          setMovies(results);
          setTotalPages(total_pages);
          setStatus(STATUS.fulfilled);
        } else {
          setMovies([]);
          setTotalPages(0);
          setStatus(STATUS.rejected);
        }
      } catch (error) {
        console.log(error);
        setStatus(STATUS.rejected);
      }
    };
    getData();
  }, [page, query]);

  const onSearch = query => {
    setQuery(query);
  };

  const onPageChange = (event, page) => {
    history.push({ ...location, search: `query=${query}&page=${page}` });
  };

  if (status === STATUS.pending) {
    return (
      <>
        <SearchForm onSearch={onSearch} />
        <Preloader />
      </>
    );
  }

  if (status === STATUS.fulfilled) {
    return (
      <>
        <SearchForm onSearch={onSearch} />
        <MoviesList movies={movies} />
        <div className={s.wrapper}>
          <Pagination
            count={totalPages}
            onChange={onPageChange}
            page={Number(page)}
            showFirstButton
            showLastButton
          />
        </div>
      </>
    );
  }

  if (status === STATUS.rejected) {
    return (
      <>
        <SearchForm onSearch={onSearch} />
        <NotFound text={'Nothing was found, please try again'} />
      </>
    );
  }

  return (
    <>
      <SearchForm onSearch={onSearch} />
    </>
  );
}

export default MoviesSearch;
