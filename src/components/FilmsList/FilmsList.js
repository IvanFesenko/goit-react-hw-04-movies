function FilmsList({ movies }) {
  console.log(movies);
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            {movie.title ? movie.title : movie.original_name}
          </li>
        );
      })}
    </ul>
  );
}

export default FilmsList;
