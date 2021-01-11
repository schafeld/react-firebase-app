import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  };
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({...selectedEvent, ...values}))
      : dispatch(createEvent({
        ...values,
        id: cuid(),
        hostedBy: 'Harry Placeholder',
        attendees: [{
          id: 'placeholder_id',
          name: 'Pete Placeholder',
          photoURL: 'https://randomuser.me/api/portraits/men/29.jpg'
        }],
        hostPhotoURL: '/assets/icons/user.svg'
      }));
    history.push('/events');
  }

  function handleInputChange(e) {
    // getting values from targeted input field through destructuring
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit event details' : 'Create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            name='title'
            type='text'
            placeholder='Event title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link} to='/events'
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  )
}