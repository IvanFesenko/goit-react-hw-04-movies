import React, { Component } from 'react';

import API from '../../services/TMDB';

import MoviesList from '../MoviesList/MoviesList';

class Trending extends Component {
  state = {
    page: 1,
    movies: [],
    isLoading: true,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);
    this.getTrending();
  }

  getTrending = async () => {
    const { page } = this.state;

    try {
      const data = await API.getTrending(page);
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
    return <>{movies.length > 0 && <MoviesList movies={movies} />}</>;
  }
}

export default Trending;
