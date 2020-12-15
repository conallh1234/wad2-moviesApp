import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoritesTrending = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavoritesTrending(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};




export default AddToFavoritesTrending;