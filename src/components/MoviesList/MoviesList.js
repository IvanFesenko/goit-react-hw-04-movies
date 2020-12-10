import { Link } from 'react-router-dom';

import s from './MoviesList.module.css';

function MoviesList(props) {
  const { movies } = props;
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.movie}>
            <Link to={`/movies/:${movie.id}`}>
              {movie.title ? movie.title : movie.original_name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
