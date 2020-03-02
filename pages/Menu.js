import React from 'react';
import { Container, Image, Menu, Icon } from 'semantic-ui-react';

export default() => (
  <Menu size='massive'>
    <Container fluid style={{background:'#EDF5E1'}}>
      <Menu.Item as='a' header>
        <Icon name='ethereum'/> Ethereum-Based Question & Answering System
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item as='a' name='new' header>
          Create Question
        </Menu.Item>

        <Menu.Item as='a' name='profile' header>
          Profile
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
