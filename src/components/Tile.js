import React, { useState } from "react";
import HideButton from "./HideButton";
import Description from "./Description";

function Tile({ hog, onHideButtonClick }) {
  const [clickedPig, setClickedPig] = useState("");

  function handleTileClick(event) {
    setClickedPig(hog);
  }

  return (
    <div className="cards pigTile ui eight wide column">
      <h2 className="largeHeader">{hog.name}</h2>
      <img
        src={hog.image}
        className="minPigTile"
        alt={hog.name}
        onClick={handleTileClick}
      />
      {clickedPig ? <Description hog={clickedPig} /> : null}
      <HideButton hog={hog} onHideButtonClick={onHideButtonClick} />
    </div>
  );
}

export default Tile;
