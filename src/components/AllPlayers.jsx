import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import PlayerListName from "./PlayerListName";
import { NewPlayerForm } from "./NewPlayerForm";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  console.log(players);
  console.log(searchParams);

  useEffect(() => {
    async function getAllPlayers() {
      const response = await fetchPlayers();
      if (response.success) {
        setPlayers(response.data.players);
      } else setError(response.error.message);
    }
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParams
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParams)
      )
    : players;

  return (
    <>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <NewPlayerForm players={players} setPlayers={setPlayers} />
      {error && <p>{error}</p>}
      {playersToDisplay.map((player) => {
        return (
          <div>
            <PlayerListName player={player} key={player.id} />
          </div>
        );
      })}
    </>
  );
}
