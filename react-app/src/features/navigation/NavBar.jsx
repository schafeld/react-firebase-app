import React, { useState } from "react"
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';
export default function NavBar({setFormOpen}) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut(){
    setAuthenticated(false);
    history.push('/');
  }

  return (
    <Menu inverted fixed='top'>
    <Container>
      <Menu.Item as={NavLink} exact to='/' header>
        <img src='/assets/logo.svg' alt='logo' id="logo" />
      </Menu.Item>
      <MenuItem name='Events' as={NavLink} to='/events' />
      {authenticated && (
        <MenuItem as={NavLink} to='/createEvent'>
          <Button positive inverted content='Create Event' />
        </MenuItem>
      )}
      {authenticated ? (
        <SignedInMenu signOut={handleSignOut} />
      ) : (
        <SignedOutMenu setAuthenticated={setAuthenticated} />
      )}
    </Container>
    </Menu>
  )
}