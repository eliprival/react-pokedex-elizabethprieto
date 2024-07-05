import React from "react";
import "./styles/pokeFooter.css";

const PokeFooter = () => {
  return (
    <div className="pokefooter">
      <div className="pokefooter__black">
        <div className="pokefooter__outercircle">
          <div className="pokefooter__innercircle"></div>
        </div>
      </div>
      <div className="pokefooter__red">
        © 2024 Pokédex Inc. | All Rights Reserved
      </div>
    </div>
  );
};

export default PokeFooter;
