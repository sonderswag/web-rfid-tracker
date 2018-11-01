import React, { Component } from 'react'

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = { 
    loginStatus: false,
    setLogin: (value) => {
      this.setState({ loginStatus: value});
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
