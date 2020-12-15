import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../templateCreditListPage";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  }, []);
  return (
    <PageTemplate 
    title='Credits'
    credits={credits}
  />
  );
};