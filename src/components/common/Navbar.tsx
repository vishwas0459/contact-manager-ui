import * as React from 'react';
import { Component } from 'react';

export interface NavBarProps {}

export interface NavBarState {}

class NavBar extends React.Component<NavBarProps, NavBarState> {
  // state = { :  }
  render() {
    return <h1>Hello React!</h1>;
  }
}

export default NavBar;
