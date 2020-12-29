import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({formOpen, setFormOpen}) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(ev) {
    setEvents([...events, ev])
  }

  return(
    <Grid>
      <Grid.Column width={10} >
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6} >
      {/* React 'ternary' to toggle form visibility. */}
      {formOpen &&
        <EventForm 
          setFormOpen = {setFormOpen}
          setEvents = {setEvents}
          createEvent = {handleCreateEvent}
        />}
      </Grid.Column>
    </Grid>
  )
}