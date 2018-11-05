import React, { Component } from 'react';
import styled from 'styled-components';
import { FaUserPlus } from 'react-icons/fa';
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

export default class AddUserPanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      firstName: '',
      LastName: '',
      Id: '',
      TIDs: ['ASDFADS', 'DAFADS', 'DAFADSF', 'DAFDAFSA'],
    };
  }

  handleFormClose = () => {
    this.setState({ show: false, userName: '', password: '' });
  }

  handleFormShow = () => {
    this.setState({ show: true });
  }
  
  handleFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  }

  handleLastName = (e) => {
    this.setState({ lastName: e.target.value });
  }

  handleId = (e) => {
    this.setState({ id: e.target.value });
  }

  generateOptions = (e) => {
    return this.state.TIDs.map(id => <option value="select">{id}</option>);
  }


  render() {
    const { show, firstName, lastName, id } = this.state;
    return (
      <React.Fragment>
        <ButtonPanel color={Colors.green} onClick={this.handleFormShow}>
          Add User
          <FaUserPlus
            color={Colors.green}
            style={{marginTop: '10px', height: '80%', width:'80%'}}/>
        </ButtonPanel>
        <FormModal show={show} onHide={this.handleFormClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <FormGroup
              controlId="FirstName"
            >
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter Name"
                value={firstName}
                onChange={this.handleFirstName}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="LastName"
            >
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                value={lastName}
                placeholder="Enter Name"
                onChange={this.handleLastName}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="User Id"
            >
              <ControlLabel>User Id</ControlLabel>
              <FormControl
                value={id}
                placeholder="Enter id"
                onChange={this.handleId}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select Unassigned TID</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                {this.generateOptions()}
              </FormControl>
            </FormGroup>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <FormButton
              color={Colors.green}
              type="submit"
              onClick={this.handleFormSubmit}
            >
                Submit 
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