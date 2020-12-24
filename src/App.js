import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Preloader from './components/Preloader/Preloader';
import Container from './components/Container/Container';
import Header from './components/Header/Header';

// import Trending from './components/Trending/Trending';
// import MoviesSearch from './components/MoviesSearch/MoviesSearch';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
// import NotFound from './components/NotFound/NotFound';

const Trending = lazy(() =>
  import(
    './components/Trending/Trending.js' /* webpackChunkName: "trending" */
  ),
);
const MoviesSearch = lazy(() =>
  import(
    './components/MoviesSearch/MoviesSearch.js' /* webpackChunkName: "movies-search" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFound = lazy(() =>
  import(
    './components/NotFound/NotFound.js' /* webpackChunkName: "not-found" */
  ),
);

function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={Preloader}>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route exact path="/movies" component={MoviesSearch} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
