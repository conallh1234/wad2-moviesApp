import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const trendingFavorites = context.trending.filter(m => m.favorite)
  const discoverFavorites = context.movies.filter( m => m.favorite )
  const favorites = [...discoverFavorites, ...trendingFavorites]


  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;