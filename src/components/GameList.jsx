import { useEffect, useState } from "react";
import SearchIcon from "../assets/search.svg";
import "../assets/style/App.css";
import GameCard from "./GameCard";

import React from "react";

function GameList() {
  const [games, setGames] = useState("");
  const fetchGame = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=b5059cddfae7423aa14e4ed007adc0c9`
    );
    const data = await response.json();
    setGames(data.results);
  };

  useEffect(() => {
    fetchGame();
  }, []);
  return (
    <div className="app">
      <h1>Blazing Games</h1>
      <div className="search">
        <input />
        <img src={SearchIcon} alt="search" />
      </div>

      {games?.length > 0 ? (
        <div className="container">
          {games.map((game) => (
            <GameCard game={game} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No games found</h2>
        </div>
      )}
    </div>
  );
}

export default GameList;
