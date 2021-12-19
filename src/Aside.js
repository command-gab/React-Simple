// Global dependencies
import React, { Component } from 'react';

// Importing components from the files
import './Aside.css';

// Created a component named Aside and extends by telling the component this is a class
class Aside extends Component {

// Imported components into Aside.js to be rendered
  render() {

// Return everything in between a component's opening and closing tags
    return (
        <aside className="Aside">
        </aside>

    );
  }
}

// Exporting to give access to use Aside, allows other indexes to reference Aside
export default Aside;
