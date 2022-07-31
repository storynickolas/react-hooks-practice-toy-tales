import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, donate, updateToys }) {
  return (
    <div id="toy-collection">{toys.map((item) => <ToyCard key={item.id} toy={item} donate={donate} updateToys={updateToys}></ToyCard>)}</div>
  );
}

export default ToyContainer;
