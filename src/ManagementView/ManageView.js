import React, { Component } from 'react'
import styled from 'styled-components';
import { Panel } from 'react-bootstrap';
import Colors from '../Colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: ${props => props.height ? props.height : '%100'};
`

const CardButton = styled(Panel)`
  background-color: ${props => props.color ? props.color : 'white'};
  width: 30vw;
  height: 30vh;
  border-color: ${Colors.grey}40;
  border-width: 3px;
`


export default class ManageView extends Component {
  render() {
    return (
      <Container>
        <Row height='50%' style={{marginTop: '50px'}}>
          <CardButton color={Colors.green}>
            <Panel.Body style={{display: 'flex', width: '100%'}}>Panel content</Panel.Body>
          </CardButton>
          <CardButton color={Colors.red}>
            <Panel.Body>Panel content</Panel.Body>
          </CardButton>
          <CardButton color={Colors.orange}>
            <Panel.Body>Panel content</Panel.Body>
          </CardButton>
        </Row>
        <Row height='50%' style={{ marginTop: '40px' }}>
          <Panel style={{width: '45vw', height: '50vh', background: Colors.grey}}>
            <Panel.Heading>Panel heading without a title</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
          <Panel style={{width: '45vw', height: '50vh', background: Colors.grey}}>
            <Panel.Heading>Panel heading without a title</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </Row>
      </Container>
    )
  }
}
