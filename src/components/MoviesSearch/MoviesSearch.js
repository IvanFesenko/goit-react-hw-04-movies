import { useState, useEffect } from 'react';
import 'rc-pagination/assets/index.css';
import rclocale from 'rc-pagination/lib/locale/en_US';

import API from '../../services/TMDB';
import STATUS from '../../services/Status';

// import s from './MoviesSearch.module.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import NotFound from '../NotFound/NotFound';
import Pagination from 'rc-pagination';

function MoviesSearch() {
  const [status, setStatus] = useState(STATUS.idle);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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

  const onPageChange = value => {
    setPage(value);
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
        <Pagination
          onChange={onPageChange}
          current={page}
          total={totalPages}
          locale={rclocale}
          pageSize={1}
        />
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
