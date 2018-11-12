import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaUserTag, FA } from 'react-icons/fa';
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
import Settings from '../Settings';
import DataMonitor from '../dataRetrieval';


export const MessageBox = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${props => props.color}10;
border-top: 3px solid ${props => props.color};
border-left: 5px solid ${props => props.color}01;
border-right: 5px solid ${props => props.color}01;
font-size: 25px;
color: ${props => props.color};
margin-bottom: 20px;
`

MessageBox.defaultProps = {
  color: Colors.red,
}

const NameBox = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 5px 20px 5px;
font-size: 20px;
color: ${props => props.color};
`

NameBox.defaultProps = {
  color: Colors.green,
}


function checkFail(state) {
    return state === 0;
  }
function checkSuccess(state) {
    return state === 1;
  }
function resetStatus() {
  return -1;
}

export default class EditTagPanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.selectRef = React.createRef();
    this.color = Colors.blue;
    this.state = {
      show: false,
      submitStatus: resetStatus(), // -1 neutral, 0 fail, 1 success 
      searchStatus: resetStatus(), 

      searchSuccess: false,
      
      id: '',
      TIDs: [],
    };
  }

  componentWillMount() {
    this.updateData();
  }
  
  componentDidMount() {
    DataMonitor.subscribe(this.updateData);
  }

  updateData = async () => {
    const res = await  axios.get(`${Settings.backend}/personnel/un-name`);
    const newData = res.data.map((item) => item.TID)

    this.setState({ TIDs: newData });
  }

  handleFormSubmit = async () => {
    // const TID = this.selectRef.current.value;
    // const { firstName, lastName, id } = this.state;
    // const argument = `personnel/add/${TID}/?first=${firstName}&last=${lastName}&ID=${id}`;
    // axios.put(`${Settings.backend}/${argument}`)
    //   .then((res) => { this.setState({ submitSuccess: true })})
    //   .catch((err) => { this.setState({ submitFail: true }) })
    
  }

  handleSearchId = async () => {
    // this is where you search the dataBase to validate that UserID is valid
    // If so then trigger name to pop up 

    // If not then trigger error with validation function 

  }

  handleFormClose = () => {
    this.setState({ show: false, submitStatus: resetStatus(), searchStatus: resetStatus()});
  }

  handleFormShow = () => {
    this.setState({ show: true });
  }
  
  handleId = (e) => {
    this.setState({ id: e.target.value });
  }

  generateOptions = (e) => {
    return this.state.TIDs.map(id => <option value={id}>{id}</option>);
  }

  validateFirst = () => {
    const length = this.state.firstName.length
    if (length > 2) return 'success';
    else if (length === 0) return 'error';
    return null;
  }

  validateLast = () => {
    const length = this.state.firstName.length
    if (length > 2) return 'success';
    else if (length < 2) return 'error';
    return null;
  }

  validateId = () => {
    const {id, searchStatus } = this.state;

    if (checkFail(searchStatus)) return 'error';
    if (id.length > 2) return 'success';
    else if (id.length < 2) return 'error';
    return null;
  }


  render() {
    const { show, searchStatus, id, submitStatus } = this.state;
    return (
      <React.Fragment>
        <ButtonPanel color={this.color} onClick={this.handleFormShow}>
          Edit User Tag
          <FaUserTag
            color={this.color}
            style={{marginTop: '10px', height: '80%', width:'80%'}}/>
        </ButtonPanel>
        <FormModal show={show} onHide={this.handleFormClose} color={this.color}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          { checkFail(submitStatus) && (
            <MessageBox color={Colors.red}>
              Failed to add user, make sure ID is unique
            </MessageBox>
          )}
          { checkSuccess(submitStatus) && (
            <MessageBox color={Colors.green}>
              Success!!
            </MessageBox>
          )}
          <form>
            <FormGroup
              controlId="User Id"
              validationState={this.validateId()}
            >
              <ControlLabel>User ID</ControlLabel>
              <FormControl
                value={id}
                placeholder="Enter id"
                onChange={this.handleId}
              />
              <FormControl.Feedback />
            </FormGroup>
            <NameBox>
              { checkSuccess(searchStatus) && 'Name: Christian Wagner'}
              <FormButton
              style={{marginLeft: 'auto'}}
              color={this.color}
              onClick={this.handleFormSubmit}
            >
                Search 
            </FormButton>
            </NameBox>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select Unassigned TID</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                inputRef={this.selectRef}
              >
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
          </Modal.Footer>
        </FormModal>
      </React.Fragment>
    )
  }
}