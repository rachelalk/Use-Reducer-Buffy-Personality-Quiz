import React from "react";

function ResultsDisplay({ result }) {
	// let character;
	// for (let i = 0; i < result; i++)
	// 	if (result === "a") {
	// 		character = "Giles";
	// 	}
	// if (result === "b") {
	// 	character = "Buffy";
	// }
	// if (result === "c") {
	// 	character = "Willow";
	// }
	// if (result === "d") {
	// 	character = "Xander";
	// }

  let characterKey = {a:'Giles',b:'Buffy',c:'Willow',d:'Xander'}
  let character = characterKey[result]
	return (
		<div>
			<h2>The results are in. You're the most like {character}!</h2>
		</div>
	);
}

export default ResultsDisplay;
