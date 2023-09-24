import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlayerListName({ player }) {
  const navigate = useNavigate();
  console.log(player.id);

  return (
    <>
      <h3>{player.name}</h3>
      <button onClick={() => navigate(`/${player.id}`)}>See details</button>
    </>
  );
}
