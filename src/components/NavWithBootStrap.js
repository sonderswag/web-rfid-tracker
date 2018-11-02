import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import Colors from './Colors';
import Login from './Login';
import colors from '../Colors';

const FlexNavbar = styled(Navbar)`
  height: 55px;

  .container {
    display: flex;
    width: 100%;
    
  }
`

const Logo = styled.img`
  height: 35px;
  position: relative;
  bottom: 10px;
  
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  `

const NavBox = styled(NavItem)`
  text-decoration: none;
  color: ${Colors.lightGrey};
  :hover {
    color: ${Colors.lightGrey}80;
    background-color: ${Colors.lightGrey}30; 
    border-bottom: solid 2px ${colors.blue};
  }
`
export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
    }
  }

  render() {
    const { showLogin } = this.state;
    return (
      <Route render={({ history }) => (
        <div style={{height: '55px'}}>
          <FlexNavbar fixedTop inverse >
            <Navbar.Header >
            <Navbar.Brand>
            <Row onClick={() => history.push('/')} style={{color: Colors.blue, fontWeight: 'bold'}}>
              <Logo src="/jwst.png" alt="" />
              JWST Personnel Locator
            </Row>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavBox onClick={() => history.push('/')}>
                Home
              </NavBox>
            </Nav>
            <Nav>
              <NavBox onClick={() => history.push('/manage')}>
                  Manage
              </NavBox>
            </Nav>
            <Nav style={{marginLeft: 'auto'}}>
              <Login/>
            </Nav>
          </FlexNavbar>
        
        </div>
      )} />
    )
  }
}