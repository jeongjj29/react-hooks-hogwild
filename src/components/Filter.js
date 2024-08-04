import React from "react";

function Filter({ isChecked, onCheckboxChange }) {
  function handleChange() {
    onCheckboxChange();
  }
  return <input type="checkbox" checked={isChecked} onChange={handleChange} />;
}

export default Filter;
