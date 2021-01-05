import React from 'react';
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react';

export default function HomePage({history}) {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image src='/assets/logo.svg' style={{marginBottom: 12, backgroundColor: 'white', padding: 10, width: '6em'}} />
          Olli's Event App
        </Header>
        <Button size='huge' inverted onClick={() => history.push('/events')}>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}