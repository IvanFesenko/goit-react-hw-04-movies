import { useState, useEffect } from 'react';
import 'rc-pagination/assets/index.css';
import rclocale from 'rc-pagination/lib/locale/en_US';

import API from '../../services/TMDB';
import STATUS from '../../services/Status';

import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import NotFound from '../NotFound/NotFound';
import Pagination from 'rc-pagination';

function Trending() {
  const [status, setStatus] = useState(STATUS.pending);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const { results, total_pages } = await API.getTrending(page);
        setMovies(results);
        setTotalPages(total_pages);
        setStatus(STATUS.fulfilled);
      } catch (error) {
        console.error(error);
        setStatus(STATUS.rejected);
      }
    };

    getData();
  }, [page]);

  const onPageChange = value => {
    setPage(value);
  };

  if (status === STATUS.pending) {
    return <Preloader />;
  }

  if (status === STATUS.fulfilled) {
    return (
      <>
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

  return <NotFound />;
}

export default Trending;
