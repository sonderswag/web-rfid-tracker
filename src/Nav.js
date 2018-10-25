import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import styled from 'styled-components';
import Colors from './Colors';

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
  transform: translateY(-5px);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  color: rgba(49, 144, 144);
  `

export default function Banner() {
  return (
    <LeftNavbar fixedTop inverse >
      <Navbar.Header >
        <Navbar.Brand style={{ marginLeft: '5px'}}>
          <Row >
            <Logo src="/jwst.png" alt="" />
            <a href="#home" style={{color: Colors.blue}}>JWST Personnel Locator</a>
          </Row>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Link Right
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link Right
        </NavItem>
      </Nav>
    </LeftNavbar>
  )
}
