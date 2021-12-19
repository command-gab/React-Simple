// Global dependencies
import React, { Component } from 'react';

// Importing components from the files
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Article from './Article';
import Nav from './Nav';
import Div from './Div';
import Footer from './Footer';

// Created a component named App and extends by telling the component this is a class
class App extends Component {

// Imported components into App.js to be rendered
  render() {

// Return everything in between a component's opening and closing tags
// Line 21-24 - Different components that will be rendered with App
// Gave two properties in Header component
    return (
      <div className="App">
        <Header backColor="green" width="100%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Article tickleMe="pink"></Article>
        <Nav lakersMe="purple"></Nav>
        <Div height="600px" width="60%"></Div>
        <Footer></Footer>
      </div>
    );
  }
}
// Exporting to give access to use App, allows other indexes to reference App
export default App;
