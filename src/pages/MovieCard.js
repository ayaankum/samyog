import React from "react";
import './Team.css'
const MovieCard = ({ posterImage, title, description1,designation }) => {
  return (
    <div className="card">
      <div className="poster">
        <img src={posterImage} alt="Movie Poster" />
      </div>
      <div className="details">
        <h1>{title}</h1>
        <p className="desc"><span style={{color:"aqua"}} className="designa">{designation}</span><br/>{description1}</p>
      </div>
    </div>
  );
};

export default MovieCard;
