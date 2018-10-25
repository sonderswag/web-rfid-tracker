import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  from   { opacity: 0; }
  to { opacity: 1; }
`


const WidgetGrowTran = styled(CSSTransition)`
  width: ${props => props.position.width}px;
  height: ${props => props.position.height}px;
  top: ${props => props.position.top}px;
  left: ${props => props.position.left}px;
  &.grow-enter-done {
    animation-name: ${props => growAnimation(props.position)};
    animation-duration: 1s;
    animation-fill-mode: both;
    
  }
  &.grow-exit.grow-exit-active {
    animation-name: ${props => growAnimation(props.position)};
    animation-duration: 1s;
    animation-direction: reverse;
    animation-fill-mode: both;
  }
`;
export default function Popup(WrappedComponent) {
  const IsPopup = (props) => {

  }
  
}

