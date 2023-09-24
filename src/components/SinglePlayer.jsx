import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";
import { useParams } from "react-router-dom";
import { PlayerCard } from "./PlayerCard";

export default function SinglePlayer() {
  const { id } = useParams();
  console.log(id);

  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSinglePlayer() {
      const response = await fetchSinglePlayer(id);
      if (response.success) {
        setPlayer(response.data.player);
      } else {
        setError(error.message);
      }
    }
    getSinglePlayer();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {player && <PlayerCard player={player} />}
    </>
  );
}
