import { useState, useEffect } from 'react';

import API from '../../../services/TMDB';
import STATUS from '../../../services/Status';

import Preloader from '../../Preloader/Preloader';
import NotFound from '../../NotFound/NotFound';

export default function Cast({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.pending);

  useEffect(() => {
    const getData = async () => {
      try {
        const { results } = await API.getMovieReviews(movieId);
        setReviews(results);
        setStatus(STATUS.fulfilled);
      } catch (error) {
        setReviews([]);
        setStatus(STATUS.rejected);
      }
    };
    getData();
  }, [movieId]);

  if (status === STATUS.pending) {
    return <Preloader />;
  }

  if (status === STATUS.rejected) {
    return <NotFound />;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No reviews was found</h2>
      )}
    </div>
  );
}
