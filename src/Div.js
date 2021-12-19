// Global dependencies
import React, { Component } from 'react';

// Importing components from the files
import './Div.css';

// Created a component named Div and extends by telling the component this is a class
class Div extends Component {

// Imported components into Div.js to be rendered
  render() {

// Creating an object named style that contains our props
const style = {
  height: this.props.height,
  width: this.props.width
}

// Return everything in between a component's opening and closing tags
    return (
        <div style={style} className="Div-main">
        </div>

    );
  }
}

// Exporting to give access to use Div, allows other indexes to reference Div
export default Div;
