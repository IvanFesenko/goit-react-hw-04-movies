import React, { Component } from 'react';

import API from '../../services/TMDB';

import FilmsList from '../FilmsList/FilmsList';

class Trandings extends Component {
  state = {
    page: 1,
    movies: [],
    isLoading: true,
    error: false,
  };

  componentDidMount() {
    this.getTrandings();
  }

  getTrandings = async () => {
    const { page } = this.state;

    try {
      const data = await API.getTrendings(page);
      this.setState({ movies: data.results, isLoading: false });
    } catch (error) {
      this.setState({
        error: true,
        isLoading: false,
      });
    }
  };

  render() {
    const { movies } = this.state;
    return <>{movies.length > 0 && <FilmsList movies={movies} />}</>;
  }
}

export default Trandings;
