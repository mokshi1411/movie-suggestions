import React from "react";

const Genre = ({ genreListArray, buttonclickhandler }) => {
  return (
    <div className="genre-list">
      {genreListArray.map((genre) => {
        return (
          <button
            key={genre}
            className="genre-button"
            onClick={() => {
              buttonclickhandler(genre);
            }}
          >
            <h2>{genre}</h2>
          </button>
        );
      })}
    </div>
  );
};

export default Genre;
