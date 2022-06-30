import React from "react";

const SuggestionItems = ({ movie }) => {
  return (
    <div className="suggestion-card">
      <div className="card-left">
        <img src={movie.image} alt='pushpy good boi'/> 
      </div>
      <div className="card-info">
        <h2 className="card-info-header">{movie.name}</h2>
        <p>{movie.movie_description}</p>
        <div className="rating">
          <h3>Rating</h3>
          <h2>
            <span>{movie.movie_rating}</span>/10
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SuggestionItems;
