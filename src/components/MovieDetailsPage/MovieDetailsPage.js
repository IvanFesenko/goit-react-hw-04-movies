import React, { Component } from 'react';
import API from '../../services/TMDB';
import STATUS from '../../services/Status';

import noImage from '../../images/noImage.png';

import NotFound from '../NotFound/NotFound';

import s from './MovieDetailsPage.module.css';

class MoviesDetailsPage extends Component {
  state = {
    movie: {},
    status: STATUS.pending,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const data = await API.getMovieDetails(movieId);
      this.setState({ movie: data, status: STATUS.fullfiled });
    } catch (error) {
      this.setState({ status: STATUS.rejected });
    }
  }
  render() {
    const {
      poster_path,
      title,
      original_name,
      overview,
      release_date,
      homepage,
    } = this.state.movie;
    const { status } = this.state;

    if (status === STATUS.pending) {
      return <div>Preloader</div>;
    }

    if (status === STATUS.fullfiled) {
      return (
        <div className={s.wrapper}>
          <div className={s.poster}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noImage
              }
              alt={title && original_name}
              width="300"
            />
          </div>
          <div>
            <h2>{title ? title : original_name}</h2>
            <p>Overview:</p>
            <p>{overview}</p>
            <p>Release: {release_date}</p>
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              Homepage
            </a>
          </div>
        </div>
      );
    }
    return <NotFound />;
  }
}

export default MoviesDetailsPage;
