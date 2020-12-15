import React from "react";
import { Link } from "react-router-dom";
import "./creditCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreditsCard = ({credits, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-dark text-white">
      <Link to={`/movies/${credits.id}/credits`}>
        <img
          className="card-img-tag center "
          alt={id.title}
          src={
            credits.poster_path
              ? `${credits.id.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body ">
          <h4 className="card-title ">{credits.cast.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {credits.gender}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {credits.popularity}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(credits)}
        </div>
      </div>
    </div>
  );
};

export default CreditsCard;