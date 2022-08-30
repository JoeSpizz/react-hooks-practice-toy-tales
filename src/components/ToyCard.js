import React from "react";

function ToyCard({toy, deleteToy}) {
  function deleteClick(e){
    console.log(e.target)
    let id = e.target.id
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {"Content-type": "Application/JSON"},
    })
    .then(r=>r.json())
    .then(deleteToy(id))
  }

  function likeClick(e){
    let ID = e.target.id
    const updateObj = {
      likes: toy.likes + 1,
    }
    fetch(`http://localhost:3001/toys/${ID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Appliation/JSON",
        "Access-Control-Allow-Origin": "*",

      },
      body: JSON.stringify(updateObj)
  })
  .then(r=>r.json())
  .then(data=>console.log(data))
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
      <button id={toy.id} className="like-btn" onClick={likeClick}>Like {"<3"}</button>
      <button id={toy.id} className="del-btn" onClick={deleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
