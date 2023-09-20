import { useState, useEffect } from "react";
import fetchPlayers from "../API";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  console.log(players);

  useEffect(() => {
    async function getAllPlayers() {
      const response = await fetchPlayers();
      if (response.success) {
        setPlayers(response.data.players);
      } else setError(response.error.message);
    }
    getAllPlayers();
  }, []);

  return (
    <>
      {players.map((player) => {
        return (
          <div>
            <h4>{player.name}</h4>
          </div>
        );
      })}
    </>
  );
}
