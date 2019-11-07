import React from 'react'

import './AnimeCard.css';

const AnimeCard = (props) => (
  <div className="card" style={{ backgroundImage: `url(${props.anime.image})` }}>
    <div className="card-content">
      <a href={props.anime.url} target="_blank" rel="noopener noreferrer">{props.anime.title}</a>
    </div>
  </div>
)

export default AnimeCard

