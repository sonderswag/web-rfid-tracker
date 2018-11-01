import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import "react-table/react-table.css";
import Nav from './Nav';
import Main from './MainView/Main';
import ManageView from './ManagementView/ManageView';
import AppProvider from './AppProvider';
import './App.css';



const Container = styled.div`
  margin-top: 51px;
  height: calc(100% - 51px);
`

class App extends Component {

  render() {
    return (
      <AppProvider>
        <Nav />
        <Container>
          <Switch>
            <Route path='/manage' component={ManageView} />
            <Route path='/' component={Main} />
          </Switch>
        </Container>
      </AppProvider>
    );
  }
}

export default App;
