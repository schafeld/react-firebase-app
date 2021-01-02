import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event])
  }

  return(
    <Grid>
      <Grid.Column width={10} >
        <EventList events={events} selectEvent={selectEvent} />
      </Grid.Column>
      <Grid.Column width={6} >
      {/* React 'ternary' to toggle form visibility. */}
      {/* This one key is still not enough to trigger detail display/change on clicking View buttons... */}
      {/* ...TODO: Yet unclear. Add another key somewhere? */}
      {formOpen &&
        <EventForm 
          setFormOpen = {setFormOpen}
          setEvents = {setEvents}
          createEvent = {handleCreateEvent}
          selectedEvent = {selectedEvent}
          key = {selectedEvent ? selectEvent.id : null}
        />}
      </Grid.Column>
    </Grid>
  )
}