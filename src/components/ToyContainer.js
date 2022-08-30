import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy}) {
  return (
    <div id="toy-collection">{toys.map(toy=><ToyCard toy={toy} key={toy.id} deleteToy={deleteToy}/>)}</div>
  );
}

export default ToyContainer;
