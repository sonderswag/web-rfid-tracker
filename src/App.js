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
  clear: both;
  overflow: hidden;
`

const Test = styled.div`
  clear: both;
  border: 1px solid red;
  height: 30px;
`

const T2 = styled.div`
  overflow: hidden;
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
