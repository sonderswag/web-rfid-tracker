import React, { Component } from 'react'

export default function Popup(WrappedComponent) {
  export default class Login extends Component {
    constructor(props) {
      this.state = {
        show: false
      }
    }
  
    handleClose = () =>{
    this.setState({ show: false });
      }
  
    handleShow = () => {
      this.setState({ show: true });
    }

    onClick = (el) => {
      console.log('HOC onClick');
      this.handleShow();
    }

    // if given an on click )
  
    render() {
      return (
        <React.Fragment>
        <WrappedComponent {...this.props} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <h4>Popover in a modal</h4>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </React.Fragment>
      )
    }
  }
  
}