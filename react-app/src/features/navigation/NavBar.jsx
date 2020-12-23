import React from 'react';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';

export default function NavBar({setFormOpen}) {
  return (
    <Menu inverted fixed='top'>
    <Container>
      <Menu.Item header>
        <img src='/assets/logo.svg' alt='logo' id="logo" />
        Olli's Event App
      </Menu.Item>
      <MenuItem name='Events' />
      <MenuItem>
        <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
      </MenuItem>
      <MenuItem position='right'>
        <Button basic inverted content='Login' />
        <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} /> 
      </MenuItem>
    </Container>
    </Menu>
  )
}