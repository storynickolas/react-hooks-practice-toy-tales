import React, { useState } from "react";

function ToyCard({ toy, donate, updateToys }) {
  const [likes, setLikes] = useState(toy.likes)
  function handleDonate() {
    console.log(toy.id)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => donate(toy));
  }

  function like() {
    setLikes(likes+1)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(  
        {
          likes: likes,
        }
      )
    })
      .then((r) => r.json())
      .then((updatedQ) => updateToys(updatedQ));
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={like}>Like</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
