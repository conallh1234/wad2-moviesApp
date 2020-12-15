import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavouritesTrending from '../components/buttons/addToFavoritesTrending'

const TrendingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const favoritesTrending = context.trending.filter((m) => { return ("favorite" in m)}); //gets favorites from trending A
  const favoritesDiscover = context.movies.filter((m) => { return ("favorite" in m)}); //gets favorites from discover B
  console.log(favoritesDiscover);
  var i = 0;
  var k =0;
  //need to return a list of trending movies with favorites from discover and trending removed

  const exclFavorites = []; // favortiesTrending with any favoritesDiscover entries removed
  
    for(i = 0; i < favoritesTrending.length; i++){
      let found = false
      for(k = 0; k < favoritesDiscover.length; k++) {
          if (favoritesTrending[i].id === favoritesDiscover[k].id )
            found = true
      }
      if (!found) 
          exclFavorites.push(favoritesTrending[i])
    }



  const movies = context.trending.filter((m) => { 
    return !(exclFavorites) });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesTrending movie={movie} /> 
        }}
      />
  );
};

export default TrendingMoviesPage;