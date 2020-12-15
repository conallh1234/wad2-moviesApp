import React, { useState } from "react";
import Header from "../headerPeopleList";
import PeopleList from "../personList";
import FilterControls from "../filterControls";

const PeopleListPageTemplate = ({people, title}) => {
  const [nameFilter, setNameFilter] = useState("");
  
  let displayedPeople = people
    .filter(p => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <Header title={title} numPeople={displayedPeople.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedPeople.length}/>
      <PeopleList
       people={displayedPeople}
      />
    </>
  );
};

export default PeopleListPageTemplate ;