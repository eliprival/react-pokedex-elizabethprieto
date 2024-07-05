import React from "react";
import "./styles/pokeHeader.css";

const PokeHeader = () => {
  return (
    <div className="pokeheader">
      <div className="pokeheader__red">
        <figure className="pokeheader__imglogo">
          <img src="./assets/pokedex logo.png" alt="pokedexlogo" />
        </figure>
      </div>
      <div className="pokeheader__black"></div>
      <figure className="pokeheader__imgtrainer">
        <img src="./assets/banner for header.png" alt="poketrainer" />
      </figure>
    </div>
  );
};

export default PokeHeader;
