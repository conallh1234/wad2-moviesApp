import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/upcomingMoviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;