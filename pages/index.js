import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import Login from './Login';
import Menu from './Menu';
import Head from 'next/head';

class HomePage extends Component{
  render() {
    return (
      <React.Fragment>
      <Head>
          <link
              rel="stylesheet"
              href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>EthQuestion</title>
      </Head>
      <Menu/>
      <Container>
        <Login />
      </Container>
      </React.Fragment>
    );
  }
}

export default HomePage;
