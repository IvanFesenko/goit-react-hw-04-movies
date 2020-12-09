import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import API from './services/TMDB';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import FilmList from './components/FilmsList/FilmsList';
import MoviesSearch from './components/MoviesSearch/MoviesSearch';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  state = {
    page: 1,
    films: [],
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
      this.setState({ films: data.results, isLoading: false });
    } catch (error) {
      this.setState({
        error: true,
        isLoading: false,
      });
    }
  };

  render() {
    const { films } = this.state;

    return (
      <BrowserRouter>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={FilmList} films={films} />
            <Route path="/movies" component={MoviesSearch} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
