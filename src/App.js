import React, { useState } from 'react'
import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
// import SearchBar from './components/SearchBar.jsx'


function App () {

  const [characters,setCharacters] = useState([])

  let onSearch = (character) => {

    let arr = characters.map( e => {
      if(e.id.toString() === character) return "x"
    })

    if(arr.indexOf("x") === -1){
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        });
    }
  }

  let onClose = (index) => {
    setCharacters(
      [...characters.filter( g => g.id !== index )]
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <div>
        <Cards
          characters={characters} onClose={onClose}
          />
      </div>
      <hr />
    </div>
  )
}

export default App
