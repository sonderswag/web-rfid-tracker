import React, { Component } from 'react'
import {
  Modal,
  Popover,
  OverlayTrigger,
  Overlay,
  Button,
  Tooltip,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  NavItem
} from 'react-bootstrap';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import Color from '../Colors';
import { NavLink } from '../Nav';

const ColorButton = styled(Button)`
  color: ${props => props.color};
  background-color: ${Color.grey};
  border-width: 2px;
  border-color: ${props => props.color};

  :hover {
    color: ${Color.grey};
    background-color: ${props => props.color}D0;
    border-color: ${props => props.color}80;
  }
`

const LoginModal = styled(Modal)`
  color: ${Color.lightGrey};

  & .modal-dialog .modal-content{
    background-color: ${Color.grey};
  }

  & .modal-header {
    color: ${Color.blue};
    border-bottom-color: ${Color.blue};
  }

  & .modal-footer {
    border-top-color: ${Color.blue};
  }

  & .close {
    color: ${Color.blue};
  }
`

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      userName: '',
      password: '',
    };
  }

  handleLogOut = () => {
    this.context.setLogin(false);
  }

  // NOTE: this needs to updated for real password checking
  handleFormSubmit = () => {
    const { userName, password } = this.state;
    const { onLogin } = this.props;
    if (userName === 'test' && password === 'test') {
      this.handleFormClose();
      this.context.setLogin(true);
    }
  }

  handleFormClose = () => {
    this.setState({ show: false, userName: '', password: '' });
  }

  handleFormShow = () => {
    this.setState({ show: true });
  }
  
  handleUsername = (e) => {
    this.setState({ userName: e.target.value });
  }
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  
  
  getValidationState = () => {
    const length = this.state.userName.length;
    if (length > 3) return 'success';
    else if (length > 1) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  render() {   
    const { show, userName, password } = this.state;
    console.log('login')
    return (
      <React.Fragment>
        {this.context.loginStatus ? 
          <NavLink  onClick={this.handleLogOut}>
            Logout
          </NavLink>
          :
          <NavLink  onClick={this.handleFormShow}>
            Login
          </NavLink>
        }

        <LoginModal show={show} onHide={this.handleFormClose}>
          <Modal.Header closeButton>
            <Modal.Title>Admin Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <FormGroup
              controlId="UserName"
              validationState={this.getValidationState()}
            >
              <ControlLabel>UserName</ControlLabel>
              <FormControl
                type="text"
                value={userName}
                placeholder="Enter text"
                onChange={this.handleUsername}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="Password"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                placeholder="Password"
                value={password}
                placeholder="Enter text"
                onChange={this.handlePassword}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <ColorButton
              color={Color.green}
              type="submit"
              onClick={this.handleFormSubmit}
            >
                Sign in
            </ColorButton>
            <ColorButton
              color={Color.red}
              onClick={this.handleFormClose}
            >
              Close
            </ColorButton>
          </Modal.Footer>
        </LoginModal>
      </React.Fragment>
    );
  }
}

Login.contextType = AppContext;

export default Login;
