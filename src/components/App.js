import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((response) => response.json())
      .then((data) => {
        setToys(data)
      });
  }, []);


  function addToy(toy) {
    setToys([...toys, toy])
  }

  function donate(toy) {
    const updatedItems = toys.filter((item) => item.id !== toy.id);
    setToys(updatedItems);
  }

  function updateToys(toy) {
    const updatedToys = toys.map((q) => {
      if (q.id === toy.id) {
        return toy;
      } else {
        return q;
      }
    });
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} donate={donate} updateToys={updateToys}/>
    </>
  );
}

export default App;
