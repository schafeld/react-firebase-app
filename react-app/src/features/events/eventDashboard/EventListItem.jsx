import React from 'react';
import { Button, Icon, Item, ItemGroup, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({event}) {
  return (
    <Segment.Group>
      <Segment>
        <ItemGroup>
          <Item.Image size="tiny" circular src={event.hostPhotoURL} />
          <Item.Content>
            <Item.Header content={event.title} />
            <Item.Description>
              Subtitle / Hosted by... 
            </Item.Description>
          </Item.Content>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" className="event-detail" /> {event.date}
          <Icon name="marker" className="event-detail" /> {event.venue}
          <Icon name="user" className="event-detail" /> Host: {event.hostedBy}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
        {event.attendees.map(attendee => (
          <EventListAttendee key={attendee.id} attendee={attendee} />
        ))}
        </List>
      </Segment>
      <Segment clearing>
        <div className="event-description">{event.description}</div>
        <Button color="teal" floated="right">View</Button>
      </Segment>
    </Segment.Group>
  )
}