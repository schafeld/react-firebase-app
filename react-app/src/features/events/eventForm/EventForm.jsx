import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import { Label } from 'semantic-ui-react';
import MyTextInput from '../../../app/common/form/MyTextInput';

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

  const validationSchema = Yup.object({
    title: Yup.string().required('Bitte den Titel der Veranstaltung angeben.'),
    category: Yup.string().required('Bitte Kategorie angeben.'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required()
  })
 
  // function handleFormSubmit() {
  //   selectedEvent
  //     ? dispatch(updateEvent({...selectedEvent, ...values}))
  //     : dispatch(createEvent({
  //       ...values,
  //       id: cuid(),
  //       hostedBy: 'Harry Placeholder',
  //       attendees: [{
  //         id: 'placeholder_id',
  //         name: 'Pete Placeholder',
  //         photoURL: 'https://randomuser.me/api/portraits/men/29.jpg'
  //       }],
  //       hostPhotoURL: '/assets/icons/user.svg'
  //     }));
  //   history.push('/events');
  // }

  return (
    <Segment clearing>
      
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
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
        }}
        validationSchema={validationSchema}
      >
        <Form className='ui form'>
          <Header sub color='teal' content='Event Details' />
          <MyTextInput name='title' placeholder='Event Title' />
          <MyTextInput name='category' placeholder='Description' />
          <Header sub color='teal' content='Event Location Details' />
          <MyTextInput name='city' placeholder='City' />
          <MyTextInput name='venue' placeholder='Venue' />
          <MyTextInput name='date' placeholder='Event Date' type='date' />

          <Button type='submit' floated='right' positive content='Submit' />
          <Button
            as={Link} to='/events'
            type='submit'
            floated='right'
            content='Cancel'
          />
        </Form>
 
      </Formik>
    </Segment>
  )
}