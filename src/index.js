import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import PeoplePage from "./pages/peoplePage";
import PersonPage from "./pages/personDetailsPage"
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMovies';
import WatchListPage from './pages/watchListPage';
import MoviesContextProvider from "./contexts/moviesContext";
import PeopleContextProvider from "./contexts/peopleContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader/> 
      <div className="container-fluid">
        <MoviesContextProvider>
          <PeopleContextProvider>
            <GenresContextProvider>
              <Switch>
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                <Route exact path="/movies/trending" component={TrendingMoviesPage} />
                <Route exact path="/movies/watchlist" component={WatchListPage}/>
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/people/:id" component={PersonPage} />
                <Route path="/people" component={PeoplePage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </PeopleContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));