import React from 'react';
import { MenuItem, Image, Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SignedInMenu({setAuthenticated}) {
  return (
    <MenuItem position='right'>
      <Image avatar spaced='right' src='/assets/icons/user.svg' />
      <Dropdown pointing='top left' text='Bob'>
        <DropdownMenu>
          <DropdownItem as={Link} to='/createEvent' text='Create Event' icon='plus' />
          <DropdownItem text='My Profile' icon='user' />
          <DropdownItem onClick={() => setAuthenticated(false)} text='Sign Out' icon='power' />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  )
}