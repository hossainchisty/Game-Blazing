import React from "react";
import "../assets/style/App.css";

function GameCard({ game }) {
  return (
    <div className="game">
      <img src={game.background_image} alt={game.name} />
      <h3>{game.name}</h3>
      <div className="game-info">
        <p> Release date: {game.released}</p>
        <p>Rating top: {game.rating_top}</p>
        <p>Metascore: {game.rating}</p>
        <p>Genres: {game.genres.map((genre) => genre.name).join(", ")}</p>
        <p>
          Platforms:{" "}
          {game.platforms.map((platform) => platform.platform.name).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default GameCard;
