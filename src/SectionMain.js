// Global dependencies
import React, { Component } from 'react';

// Importing components from the files
import './SectionMain.css';

// Created a component named SectionMain and extends by telling the component this is a class
class SectionMain extends Component {

// Imported components into SectionMain.js to be rendered
  render() {

// Return everything in between a component's opening and closing tags
    return (
        <section className="SectionMain">
        </section>

    );
  }
}

// Exporting to give access to use SectionMain, allows other indexes to reference SectionMain
export default SectionMain;
