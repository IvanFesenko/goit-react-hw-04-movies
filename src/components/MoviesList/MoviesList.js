import { NavLink } from 'react-router-dom';

import noImage from '../../images/noImage.png';

import s from './MoviesList.module.css';

function MoviesList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.movie}>
            <NavLink to={`/movies/${movie.id}`} className={s.movie}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : noImage
                }
                alt=""
                className={s.poster}
              />
              <p>{movie.title ? movie.title : movie.original_name}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
