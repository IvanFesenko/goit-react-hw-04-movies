import { Switch, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Trending from './components/Trending/Trending';
import MoviesSearch from './components/MoviesSearch/MoviesSearch';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Trending} />
          <Route exact path="/movies" component={MoviesSearch} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
