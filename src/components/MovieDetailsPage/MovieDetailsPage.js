import React, { Component } from 'react';
import API from '../../services/TMDB';

import s from './MovieDetailsPage.module.css';

class MoviesDetailsPage extends Component {
  state = {
    movie: {},
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const data = await API.getMovieDetails(movieId);
      console.log(data);
      this.setState({ movie: data });
    } catch (error) {}
  }
  render() {
    const { movie } = this.state;
    const { movieId } = this.props.match.params;

    return <div>Movie page - {movieId}</div>;
  }
}

export default MoviesDetailsPage;
