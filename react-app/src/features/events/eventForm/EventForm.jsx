import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Segment, FormField } from 'semantic-ui-react';
import cuid from 'cuid';
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Label } from 'semantic-ui-react';

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
    title: Yup.string().required('Bitte den Titel der Veranstaltung angeben.')
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
      <Header content={selectedEvent ? 'Edit event details' : 'Create new event'} />
      <Formik
        initialValues={initialValues}
        onSubmit={ values => console.log(values) }
        validationSchema={validationSchema}
      >
        <Form className='ui form'>
          <FormField>
            <Field name='title' placeholder='Event Title' />
            <ErrorMessage name='title' render={error => <Label basic color='red' content={error} />} />
          </FormField>
          
          <FormField>
            <Field name='category' placeholder='Category' />
          </FormField>
          <FormField>
            <Field name='description' placeholder='Description' />
          </FormField>
          <FormField>
            <Field name='city' placeholder='City' />
          </FormField>
          <FormField>
            <Field name='venue' placeholder='Venue' />
          </FormField>
          <FormField>
            <Field name='date' placeholder='Date' type='date' />
          </FormField>
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