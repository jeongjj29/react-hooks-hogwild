import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import Filter from "./Filter";
import Sort from "./Sort";
import Form from "./Form";

import hogs from "../porkers_data";

function App() {
  const [displayedHogs, setDisplayedPigs] = useState(hogs);
  const [isSortedByName, setIsSortedByName] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  function onSortClick() {
    setIsSortedByName(true);
    if (isSortedByName) {
      const hogsByWeight = [
        ...displayedHogs.sort((a, b) => {
          if (a.weight < b.weight) return -1;
          if (a.weight > b.weight) return 1;
        }),
      ];
      setIsSortedByName(false);
      setDisplayedPigs(hogsByWeight);
    } else {
      const hogsByName = [
        ...displayedHogs.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
        }),
      ];
      setIsSortedByName(true);
      setDisplayedPigs(hogsByName);
    }
  }

  function onHideButtonClick(hog) {
    const newHogs = [...displayedHogs].filter((pig) => pig.name !== hog.name);
    setDisplayedPigs(newHogs);
  }

  function onCheckboxChange() {
    if (!isChecked) {
      const newHogs = [...displayedHogs].filter((pig) => pig.greased);
      setDisplayedPigs(newHogs);
      setIsChecked(true);
    } else {
      const newHogs = [...displayedHogs, ...hogs.filter((pig) => !pig.greased)];
      setDisplayedPigs(newHogs);
      setIsChecked(false);
    }
  }

  function onFormSubmit(pig) {
    const newPigs = [...displayedHogs, pig];
    setDisplayedPigs(newPigs);
  }

  return (
    <div className="App">
      <Nav />
      <div className="filterWrapper">
        Greased Hogs Only:
        <Filter isChecked={isChecked} onCheckboxChange={onCheckboxChange} />
        <Sort isSortedByName={isSortedByName} onSortClick={onSortClick} />
      </div>
      <div className="ui grid container">
        {displayedHogs.map((hog) => (
          <Tile
            key={hog.name}
            hog={hog}
            onHideButtonClick={onHideButtonClick}
          />
        ))}
      </div>
      <Form onFormSubmit={onFormSubmit} />
    </div>
  );
}

export default App;
