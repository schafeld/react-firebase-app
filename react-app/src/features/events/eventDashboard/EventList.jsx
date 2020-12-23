import React from 'react';
import EventListItem from './EventListItem';

// destructured props.events into {events}
export default function EventList({events}) {
  return (
    <>
      {events.map(eventItem => (
        <EventListItem event={eventItem} key={eventItem.id} />
      ))}
    </>
  )
}