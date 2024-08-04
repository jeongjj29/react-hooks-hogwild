import React from "react";

function HideButton({ hog, onHideButtonClick }) {
  function handleClick() {
    onHideButtonClick(hog);
  }

  return <button onClick={handleClick}>Hide</button>;
}

export default HideButton;
