import { useEffect, useState } from "react";
import GameCard from "./components/GameCard";
import SearchIcon from "./search.svg";
import "./style/App.css";

function App() {
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
  return <div className="app">
      <h1>Game Play Blazing</h1>

      <div className="search">
        <input
          placeholder={`Search ${games.length} games`}
        />
        <img
          src={SearchIcon}
          alt="search"
        />
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
  </div>;
}

export default App;
