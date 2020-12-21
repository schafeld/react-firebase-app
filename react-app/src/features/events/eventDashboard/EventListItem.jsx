import React from 'react';
import { Button, Icon, Item, ItemGroup, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem() {
  return (
    <Segment.Group>
      <Segment>
        <ItemGroup>
          <Item.Image size="tiny" circular src="/assets/icons/user.svg" />
          <Item.Content>
            <Item.Header content="Event Title" />
            <Item.Description>
              Subtitle / Hosted by... 
            </Item.Description>
          </Item.Content>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" className="event-detail" /> Date
          <Icon name="marker" className="event-detail" /> Venue
          <Icon name="user" className="event-detail" /> Host
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
        </List>
      </Segment>
      <Segment clearing>
        <div className="event-description">Description</div>
        <Button color="teal" floated="right">View</Button>
      </Segment>
    </Segment.Group>
  )
}