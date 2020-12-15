import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.overview}</p>

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {person.birthday}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="rdh" className="list-group-item list-group-item-dark">
          Alias(s)
        </li>
        <li key="rdv" className="list-group-item ">
        {person.also_known_as.map(a => (
          <li key={a.name} className="list-group-item">
            {a.name}
          </li>
        ))}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="rdh" className="list-group-item list-group-item-dark">
          Biography
        </li>
        <li key="rdv" className="list-group-item ">
          {person.biography}
        </li>
      </ul> 

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Known For
        </li>
        {person.known_for_department}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Popularity
        </li>
        {person.popularity}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Place Of Birth
        </li>
        {person.place_of_birth}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pco" className="list-group-item list-group-item-dark">
          IMDB ID
        </li>
        {person.imdb_id}
      </ul>
    </>
  );
};