import { useState, useEffect } from 'react';

import API from '../../../services/TMDB';
import noImage from '../../../images/noImage.png';
//API.getMovieCredits(id)

import s from './Cast.module.css';

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
        <ul className={s.list}>
          {actors.map(({ id, profile_path, name }) => (
            <li key={id} className={s.actor}>
              <img
                className={s.poster}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : noImage
                }
                alt=""
                width="200"
                height="300"
              />
              <p className={s.name}>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
