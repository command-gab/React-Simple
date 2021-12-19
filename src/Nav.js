// Global dependencies
import React, { Component } from 'react';

// Importing components from the files
import './Nav.css';

// Created a component named Nav and extends by telling the component this is a class
class Nav extends Component {

// Imported components into Nav.js to be rendered
  render() {

// Creating an object named style that contains our props
    const style = {
      backgroundColor: this.props.lakersMe
    }

// Return everything in between a component's opening and closing tags
    return (
        <nav style={style} className="Nav">
        </nav>

    );
  }
}

// Exporting to give access to use Nav, allows other indexes to reference Nav
export default Nav;