import React, { Component } from 'react';
import Colors from '../Colors';
import styled from 'styled-components';
import { Panel } from 'react-bootstrap';
import { FaTags, FaPlus, FaUserPlus, FaUserMinus, FaUserEdit} from 'react-icons/fa'

const StyledPanel = styled(Panel)`
  background-color: ${props => props.color ? props.color : 'white'};
  width: 30vw;
  height: 30vh;
  border-color: ${Colors.grey}40;
  border-width: 3px;

`

const Icon = styled(FaUserPlus)`
  width: 100px;
  height: 100px;
`

export default class AddPanel extends Component {
  render() {
    return (
      <StyledPanel color={Colors.green}>
        <Icon />
      </StyledPanel>
    )
  }
}
