import React from "react";

function Sort({ isSortedByName, onSortClick }) {
  function handleButtonClick() {
    onSortClick();
  }

  function buttonText(isSortedByName) {
    if (isSortedByName === null) return "Sort By Name";
    if (isSortedByName === true) return "Sort By Weight";
    if (isSortedByName === false) return "Sort By Name";
  }

  return (
    <button onClick={handleButtonClick}>{buttonText(isSortedByName)}</button>
  );
}

export default Sort;
