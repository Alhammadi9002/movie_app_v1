import React from "react";
import star_icon from "./assets/star.svg";
import "./card.css";
import { Link } from "react-router-dom"

function Card({ movie }) {
  return (
    <Link to="movie/123">
      <div className="card">
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
      <p className="card-title">{movie.title}</p>
      <div className="d-flex">
        <img className="icon" src={star_icon} />
        <p className="white-color"> {movie.vote_average}</p>
      </div>
    </div>
    </Link>
    
  );
}

export default Card;
