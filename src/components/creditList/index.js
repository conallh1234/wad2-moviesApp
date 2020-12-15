import React from "react";
import CreditsCard from "../creditsCard";
import "./creditList.css";

const CreditList = ({credits}) => {
  const creditsCards = credits.map(c => (
    <CreditsCard key={c.id} credit={c} />
  ));
  return <div className="row movies bg-info">{creditsCards}</div>;
};

export default CreditList;