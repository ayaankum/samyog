import React from "react";
import './Team.css'
const MovieCard = ({ posterImage, title, description1,designation,description2 }) => {
  return (
    <div className="card">
      <div className="poster">
        <img src={posterImage} alt="Movie Poster" />
      </div>
      <div className="details">
        <h1>{title}</h1>
        <p className="desc">{description1}<span style={{color:"aqua"}} className="designa">{designation}</span>{description2}</p>
      </div>
    </div>
  );
};

export default MovieCard;
