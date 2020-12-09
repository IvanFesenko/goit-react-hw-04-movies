import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Trandings from './components/Trandings/Trandings';
import MoviesSearch from './components/MoviesSearch/MoviesSearch';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={Trandings} />
            <Route path="/movies" component={MoviesSearch} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
