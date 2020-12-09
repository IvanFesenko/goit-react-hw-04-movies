import React, { Component } from 'react';

import API from '../../services/TMDB';

// import s from './MoviesSearch.module.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';

class MoviesSearch extends Component {
  state = {
    page: 1,
    query: '',
    movies: [],
    isLoading: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.getData();
    }
  }

  getData = async () => {
    const { query, page } = this.state;
    try {
      const data = await API.searchMovies(query, page);
      if (data.results.length > 0) {
        this.setState({ movies: data.results, isLoading: false });
      }
    } catch (error) {
      this.setState({
        error: true,
        isLoading: false,
      });
    }
  };

  onSearch = query => {
    this.setState({
      page: 1,
      query: query,
      movies: [],
      isLoading: true,
      error: false,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchForm onSearch={this.onSearch} />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default MoviesSearch;
