import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Trending from './components/Trending/Trending';
import MoviesSearch from './components/MoviesSearch/MoviesSearch';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={Trending} />
            <Route path="/movies" component={MoviesSearch} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;
