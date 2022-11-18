import React from 'react'
import Card from './Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
    <div>
      {
        characters.map((p,index) => <Card 
        name={p.name} 
        species={p.species} 
        gender={p.gender} 
        image={p.image}
        key={index}
        clave={p.id}
        onClose={onClose}
        />)
      }
    </div>
  );
}
