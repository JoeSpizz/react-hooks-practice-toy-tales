import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

// App
// -Header
// -ToyForm
// -ToyContainer
//   --ToyCard

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(r=>r.json())
    .then(data=>setToyList(data))
  }, [])
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
 
  function addNewToy(newToy){
    setToyList([...toyList, newToy])
  }
 
  function handleDelete(toyID){
    let ID = parseInt(toyID)
    const updatedToys = toyList.filter((toy) => toy.id !== ID);
    console.log(updatedToys)
    setToyList(updatedToys);
  }

  
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm newToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toyList} deleteToy={handleDelete}/>
    </>
  );
}

export default App;
