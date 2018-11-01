import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import Colors from './Colors';
import Login from './components/Login';
import colors from './Colors';

const LeftNavbar = styled(Navbar)`
  .container {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`

const Logo = styled.img`
  height: 35px;
  margin: 0px;
  margin-right: 5px;
  transform: translateY(-10px);
  
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

const ColorLink = styled(NavLink)`
  text-decoration: none;
  color: ${Colors.lightGrey};
  font-size: 16px;
  
  :hover {
    text-decoration: none;
    color: ${Colors.lightGrey}80;
    border-bottom: solid 2px ${Colors.blue};
  }

  :active {
    color: ${Colors.blue};
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
        <LeftNavbar fixedTop inverse >
          <Navbar.Header >
          <Navbar.Brand style={{ marginLeft: '5px'}}>
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
          <Nav pullRight>
            <Login/>
          </Nav>
        </LeftNavbar>
      )} />
    )
  }
}
