import React from 'react'

import './WeekdayTile.css';

import AnimeCard from './AnimeCard'

const WeekdayTile = (props) => (
  <div className="tile">
    <h2 className={`day-title ${props.current ? 'current' : 'standard'}`}>{props.day}</h2>
    <div className="show-container">
      {props.shows.map(show => (
        <AnimeCard anime={show} key={show.id} />
      ))}
    </div>
  </div>
)

export default WeekdayTile;
