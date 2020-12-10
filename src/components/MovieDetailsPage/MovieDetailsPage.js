import React, { Component } from 'react';
import API from '../../services/TMDB';

import s from './MovieDetailsPage.module.css';

class MoviesDetailsPage extends Component {
  state = {
    movie: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      // const data = await API.getMovieDetails(id);
    } catch (error) {}
  }
  render() {
    const { movieId } = this.props.match.params;
    console.log(this.props);
    return <div>Movie page - {movieId}</div>;
  }
}

export default MoviesDetailsPage;
