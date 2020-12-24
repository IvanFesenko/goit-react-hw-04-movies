import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

// import 'rc-pagination/assets/index.css';
// import rclocale from 'rc-pagination/lib/locale/en_US';

import s from './Trending.module.css';

import API from '../../services/TMDB';
import STATUS from '../../services/Status';

import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import NotFound from '../NotFound/NotFound';
// import Pagination from 'rc-pagination';

function Trending() {
  const history = useHistory();
  const location = useLocation();
  const [status, setStatus] = useState(STATUS.pending);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const page = new URLSearchParams(location.search).get('page') ?? 1;

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

  // useEffect(() => {
  //   if (location.search !== '') {
  //     return;
  //   }

  //   history.push({ ...location, search: `page=1` });
  // }, [history, location]);

  const onPageChange = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  if (status === STATUS.pending) {
    return <Preloader />;
  }

  if (status === STATUS.fulfilled) {
    return (
      <>
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

  return <NotFound />;
}

export default Trending;
