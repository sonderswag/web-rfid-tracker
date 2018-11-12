import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Colors from './Colors';
import Login from './components/Login';

const NavContainer = styled.div`
  height: 55px;
`

const NavBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 55px;
  justify-content: flex-start;
  align-items: center;  
  background-color: rgb(34, 34, 34);
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: .8;
  }
`

const Title = styled.h1`
  margin: 0px;
  margin-left: 10px;
  font-size: 20px;
  color: ${Colors.blue};
  user-select: none;
`

export const NavLinkStyle = styled.a`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  color: ${Colors.lightGrey};
  user-select: none;
  font-size: 16px;
  border-bottom: ${props => props.active ? `solid 2px ${Colors.blue}` : 'none'};
  :hover {
    text-decoration: none;  
    color: ${Colors.lightGrey}80;
    background-color: ${Colors.lightGrey}30;
    border-bottom: solid 2px ${Colors.blue};
  }
  :visited:active,
  :active {
    background-color: ${Colors.lightGrey}80;
  }
`

const NavList = styled.ul`
  display: flex;
  height: 100%;
  margin: 0 20px 0 20px;
  list-style-type: none;
  & > li {
    display: flex;
    cursor: pointer;
    margin-right: 20px;
  }
  & > li:last-of-type {
    margin-right: 0px;
  }
`

export class NavLink extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e, history, test) => {
    console.log(test);
    const { onClick, to } = this.props;
    console.log(history);
    history.push(to);
    onClick(e);
  }

  render() {
    const { children, to } = this.props;

    return (
      <Route render={({ history, location }) => (
        <NavLinkStyle active={location.pathname === to} onClick={(e) => this.handleClick(e, history, location)}>
          {children}
        </NavLinkStyle>
      )} />
    );
  }
}

NavLink.defaultProps = {
  onClick: () => {},
}
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
          <NavContainer>
            <NavBar>
              <Logo onClick={() => history.push('/')}>
                <img src="/jwst.png" alt="" style={{ height: '35px'}}/>
                <Title>Personnel Locator</Title>
              </Logo>
              <NavList>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/manage">Manage</NavLink>
                </li>
              </NavList>
              <NavList style={{ marginLeft: 'auto'}}>
                <li><Login /></li>
              </NavList>

            </NavBar>
          </NavContainer>
      )} />
    )
  }
}

