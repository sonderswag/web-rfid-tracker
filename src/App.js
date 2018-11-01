import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import "react-table/react-table.css";
import Nav from './Nav';
import Main from './Main/Main';
import AppProvider from './AppProvider';
import './App.css';



const Container = styled.div`
  margin-top: 64px;
  height: calc(100% - 64px);
`

class App extends Component {

  render() {
    return (
      <AppProvider>
        <Nav />
        <Container>
          <Route path='/' component={Main} />
        </Container>
      </AppProvider>
    );
  }
}

export default App;
