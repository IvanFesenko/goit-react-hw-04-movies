import { NavLink } from 'react-router-dom';

import noImage from '../../images/noImage.png';

import s from './MoviesList.module.css';

function MoviesList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path, original_name }) => {
        return (
          <li key={id} className={s.movie}>
            <NavLink to={`/movies/${id}`} className={s.movie}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noImage
                }
                alt=""
                className={s.poster}
              />
              <p>{title ? title : original_name}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
