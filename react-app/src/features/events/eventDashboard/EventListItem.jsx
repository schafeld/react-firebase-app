import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, ItemGroup, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../eventActions';

export default function EventListItem({event}) {

  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <ItemGroup>
          <Item.Image size="tiny" circular src={event.hostPhotoURL} />
          <Item.Content>
            <Item.Header>
              <h3>{event.title}</h3>
            </Item.Header>
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
        <Button
          onClick={() => dispatch(deleteEvent(event.id))}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          as={Link} to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  )
}