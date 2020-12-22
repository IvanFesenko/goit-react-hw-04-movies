import { useState, useEffect } from 'react';

import API from '../../../services/TMDB';
//API.getMovieCredits(id)

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { cast } = await API.getMovieCredits(movieId);
        setActors(cast);
      } catch (error) {
        setActors([]);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {actors.length > 0 && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <span>{actor.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
