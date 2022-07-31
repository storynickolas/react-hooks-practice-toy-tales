import React, { useState } from "react";

function ToyForm({ toys, addToy }) {

  const [toyName, setToyName] = useState('')
  const [toyImage, setToyImage] = useState('')

  const length = toys.length + 1

  function handleSubmit(event) {
    event.preventDefault();
    const newToy = {
      "id": length + 1,
      "name": toyName,
      "image": toyImage,
      "likes": 0
    }; 
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy)
    })
      .then(r => r.json())
      .then(data => addToy(data))
  }

  function handleName(event) {
    setToyName(event.target.value)
  }

  function handleImage(event) {
    setToyImage(event.target.value)
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
