import React from "react";
import { useParams } from "react-router-dom";
import Movie_Bg from "./assets/movie.jpeg";
import "./card.css";

function SingleMovie() {
  const { id } = useParams();
  return (
    <div className="page_container">
    <div className="single_movie_page">
      <img src={Movie_Bg} />
      <div>
        <p className="Movie_title">Titanic</p>
        <p className="movie_title_last_part">INFO</p>
        <div className="movie_data">
          <div>Release Date. Jun 15 2018</div>
          <div>Rating: 8.2</div>
         </div>
      </div>
      <div className="movie_text">
        <div className="movie_text_head">
          <ul>
            <li> Lorem Ipsum </li>
            <li> Lorem Ipsum </li>
          </ul>
          <ul>
          <li> Lorem Ipsum </li>
          <li> Lorem Ipsum </li>
          </ul>
        </div>
      </div>
      The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage 
      the house while his wife Helen (Elastigirl) goes out to save the world.
      </div>
    </div>
  );
}
export default SingleMovie;
