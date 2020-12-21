import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';
import EventListAttendee from './EventListAttendee';

export default function EventDashboard() {
  return(
    <Grid>
      <Grid.Column width={10} >
        <EventList />
      </Grid.Column>
      <Grid.Column width={6} >
        <EventListAttendee />
      </Grid.Column>
    </Grid>
  )
}