import React from 'react'
import styles from './styles/Card.module.css'

export default function Card(props) {

  return (
    <div className={styles.card}>
      <button onClick={() => props.onClose(props.clave)}>X</button>
      <h2 className={styles.h2}>{props.name}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt="imageError" />
    </div>
  );
}
