import React from 'react'
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
    <div>
      {
        characters.map(p => <Card 
        name={p.name} 
        species={p.species} 
        gender={p.gender} 
        image={p.image}/>)
      }
    </div>
  );
}
