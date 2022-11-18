import React, { useState } from 'react'

export default function SearchBar({onSearch}) {
  const [character,setCharacter] = useState("")
  let handleChange = ({target}) => setCharacter(target.value)

  return (
    <div style={{height:"100%",  textAlign: "center"}} >
      <div style={{margin: "12px",float:"right"}}>
        <input id="input" onChange={handleChange} type='search' style={{border: "2px solid blueviolet"}}/>
        <button onClick={() => onSearch(character)} style={{borderRadius:"0px",border: "2px solid blueviolet"}}>Agregar</button>
        <button onClick={() => onSearch(Math.floor(Math.random() * 800))}>Random</button>
      </div>
    </div>
  );
}
