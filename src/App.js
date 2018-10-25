import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import "react-table/react-table.css";
import Nav from './Nav';
import Main from './Main/Main';
import './App.css';

const Container = styled.div`
  margin-top: 55px;
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Container>
          <Route path='/' component={Main} />
        </Container>

      </React.Fragment>
    );
  }
}

export default App;
