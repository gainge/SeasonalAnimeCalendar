import React from 'react'
// import PropTypes from 'prop-types'

import './WeeklyReleaseSchedule.css';

import WeekdayTile from './WeekdayTile';

// We'll need to render stuff fr
// So let's get the data in a good format

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function WeeklyReleaseSchedule(props) {
  const seasonal = props.seasonal;
  const viewing = props.viewing;

  let mapped = {};
  let weeklyShows = [];

  viewing.forEach(show => {
    mapped[show.idMal] = {
      image: show.coverImage.large,
      title: show.title.userPreferred
    }
  })

  // Map additional data in if applicable
  seasonal.forEach(show => {
    let id = show.mal_id;

    if (mapped[id]) {
      // We found a homie!
      // Add in the airing date
      mapped[id].startDate = new Date(show.airing_start);
      mapped[id].url = show.url;
      mapped[id].id = id;
      weeklyShows.push(mapped[id]);
    }
  })

  weeklyShows.sort((a, b) => ((a.startDate.getDay() < b.startDate.getDay()) ? -1 : 1));

  console.log(weeklyShows);

  // Now it's up to us to write out a cool table or something?
  const showDistribution = []

  for (let i = 0, showIndex = 0; i < DAYS.length; i++) {
    const currentDay = [];

    // Add shows while the day is equal
    while (showIndex < weeklyShows.length && weeklyShows[showIndex].startDate.getDay() === i) {
      currentDay.push(weeklyShows[showIndex]);
      showIndex++;
    }

    showDistribution.push(currentDay);
  }

  console.log(showDistribution);

  const currentDay = new Date().getDay();

  return (
    // Filter that ish
    <div>
      <h1 className="week-banner">Weekly Release Schedule</h1>
      <div className="week-wrapper">
        {showDistribution.map((distribution, index) => (
          <WeekdayTile key={DAYS[index]} shows={distribution} day={DAYS[index]} current={index === currentDay} />
        ))}
      </div>
    </div>
  )
}

export default WeeklyReleaseSchedule

