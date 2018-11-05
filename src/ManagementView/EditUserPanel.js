import React, { Component } from 'react';
import styled from 'styled-components';
import { FaUserEdit } from 'react-icons/fa';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
} from 'react-bootstrap';
import { ButtonPanel } from './ManageView';
import Colors from '../Colors';
import { FormModal, FormButton } from '../components/Login';

export default class EditUserPanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      userName: '',
      password: '',
    };
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

  render() {
    const { show, userName, password } = this.state;
    return (
      <React.Fragment>
          <ButtonPanel color={Colors.orange} onClick={this.handleFormShow}>
            Edit User
            <FaUserEdit
              style={{marginTop: '10px', height: '80%', width:'80%'}}/>
          </ButtonPanel>
        <FormModal show={show} onHide={this.handleFormClose}>
          <Modal.Header closeButton>
            <Modal.Title>Admin Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <FormGroup
              controlId="UserName"
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
            <FormButton
              color={Colors.green}
              type="submit"
              onClick={this.handleFormSubmit}
            >
                Sign in
            </FormButton>
            <FormButton
              color={Colors.red}
              onClick={this.handleFormClose}
            >
              Close
            </FormButton>
          </Modal.Footer>
        </FormModal>
      </React.Fragment>
    )
  }
}