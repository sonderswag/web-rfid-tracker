import React, { Component } from 'react';
import styled from 'styled-components';
import { FaUserMinus } from 'react-icons/fa';
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

const NameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  & > p:first-of-type {
    margin-right: 30px;
    width:200px;
  }
`

const NameBlock = styled.p`
  display: inline;
`;
export default class RemoveUserPanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      userId: '',
      password: '',
    };
  }

  handleFormClose = () => {
    this.setState({ show: false, userName: '', password: '' });
  }

  handleFormShow = () => {
    this.setState({ show: true });
  }
  
  handleUserId = (e) => {
    this.setState({ userId: e.target.value });
  }
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    const { show, userId, password } = this.state;
    return (
      <React.Fragment>
          <ButtonPanel color={Colors.red} onClick={this.handleFormShow}>
            Remove User
            <FaUserMinus
              style={{marginTop: '10px', height: '80%', width:'80%'}}/>
          </ButtonPanel>
        <FormModal show={show} onHide={this.handleFormClose}>
          <Modal.Header closeButton>
            <Modal.Title>Remove User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <FormGroup
              controlId="UserId"
            >
              <ControlLabel>User Id</ControlLabel>
              <FormControl
                type="text"
                value={userId}
                placeholder="Enter text"
                onChange={this.handleUserId}
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
          <NameContainer>
            <NameBlock>First Name:</NameBlock>
            <NameBlock>Last Name:</NameBlock>
          </NameContainer>
          </Modal.Body>
          <Modal.Footer>
            <FormButton
              color={Colors.green}
              type="submit"
              onClick={this.handleFormSubmit}
            >
                Delete
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