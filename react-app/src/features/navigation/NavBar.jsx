import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';

export default function NavBar({setFormOpen}) {
  return (
    <Menu inverted fixed='top'>
    <Container>
      <Menu.Item as={NavLink} exact to='/' header>
        <img src='/assets/logo.svg' alt='logo' id="logo" />
        Olli's Event App
      </Menu.Item>
      <MenuItem name='Events' as={NavLink} to='/events' />
      <MenuItem as={NavLink} to='/createEvent'>
        <Button positive inverted content='Create Event' />
      </MenuItem>
      <MenuItem position='right'>
        <Button basic inverted content='Login' />
        <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} /> 
      </MenuItem>
    </Container>
    </Menu>
  )
}