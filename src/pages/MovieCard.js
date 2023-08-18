import React from "react";
import './Team.css'
const MovieCard = ({ posterImage, title, description }) => {
  return (
    <div className="card">
      <div className="poster">
        <img src={posterImage} alt="Movie Poster" />
      </div>
      <div className="details">
        <h1>{title}</h1>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
