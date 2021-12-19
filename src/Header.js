// Global dependencies
import React, { Component } from 'react';

// Importing components from the files
import './Header.css';

// Created a component named Header and extends by telling the component this is a class
class Header extends Component {

// Imported components into Header.js to be rendered
  render() {

// Creating an object named style that contains our props
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }

// Return everything in between a component's opening and closing tags
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

// Exporting to give access to use Header, allows other indexes to reference Header
export default Header;


//document.querySelector("header").style.backgroundColor = "red"
