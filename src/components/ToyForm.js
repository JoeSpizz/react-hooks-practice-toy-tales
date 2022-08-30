import React, {useState} from "react";

function ToyForm({newToy}) {
  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")
  function nameEntry(e){
    setNewName(e.target.value)
  }
  function imageEntry(e){
    setNewImage(e.target.value)
  }
  function newToySubmit(e){
    e.preventDefault()
    let addedToy = {
      name: newName,
      image: newImage
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-type": "Application/JSON"},
      body: JSON.stringify(addedToy)
    })
    .then(r=>r.json())
    .then(data=>newToy(data))
  }
  return (
    <div className="container">
      <form className="add-toy-form" >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={nameEntry}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={imageEntry}
        />
        <br />
        <input
          type="button"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={newToySubmit}
        />
      </form>
    </div>
  );
}

export default ToyForm;
