import { NavLink } from 'react-router-dom';

import s from './MoviesList.module.css';

function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.movie}>
            <NavLink to={`/movies/${movie.id}`} className={s.movie}>
              {movie.title ? movie.title : movie.original_name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
