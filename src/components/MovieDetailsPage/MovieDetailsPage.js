import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch, Route, NavLink } from 'react-router-dom';

import API from '../../services/TMDB';
import STATUS from '../../services/Status';

import noImage from '../../images/noImage.png';

import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

import s from './MovieDetailsPage.module.css';

function MoviesDetailsPage() {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(STATUS.pending);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await API.getMovieDetails(movieId);
        setMovie(data);
        setStatus(STATUS.fulfilled);
      } catch (error) {
        setStatus(STATUS.rejected);
      }
    };

    getData();
  }, [movieId]);

  if (status === STATUS.pending) {
    return <Preloader />;
  }
  if (status === STATUS.fulfilled) {
    return (
      <>
        <div className={s.wrapper}>
          <div className={s.poster}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : noImage
              }
              alt={movie.title && movie.original_name}
              width="300"
            />
            <div className={s.linksWrapper}>
              <NavLink
                to={`${url}/cast`}
                className={s.link}
                activeClassName={s.linkActive}
              >
                Cast
              </NavLink>
              <NavLink
                to={`${url}/reviews`}
                className={s.link}
                activeClassName={s.linkActive}
              >
                Reviews
              </NavLink>
            </div>
          </div>
          <div>
            <h2>{movie.title ? movie.title : movie.original_name}</h2>
            <p>Overview:</p>
            <p>{movie.overview}</p>
            <p>Release: {movie.release_date}</p>
          </div>
        </div>
        <Route path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </>
    );
  }
  return <NotFound />;
}

export default MoviesDetailsPage;
