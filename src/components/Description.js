import React from "react";

function Description({ hog }) {
  return (
    <ul className="">
      <li className="hoggyText">Specialty: {hog.specialty}</li>
      <li className="hoggyText">Weight: {hog.weight}</li>
      <li className="hoggyText">Greased: {hog.greased ? "Yes" : "No"}</li>
      <li className="hoggyText achievementText">
        Highest Medal Achieved: {hog["highest medal achieved"]}
      </li>
    </ul>
  );
}

export default Description;
