import React from 'react';

const TitleCard = ({ title, year }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{year}</p>
    </div>
  );
};

export default TitleCard;
