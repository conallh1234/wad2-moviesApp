import React, { useState } from "react";
import Header from "../headerMovieList";
import CreditsList from "../creditList";

const MovieCreditPageTemplate = ({credits, title}) => {
  let displayedCredits = credits

  return (
    <>
      <Header title={title} numMovies={displayedCredits.length} />
      <CreditsList
       credits={displayedCredits}
      />
    </>
  );
};

export default MovieCreditPageTemplate ;