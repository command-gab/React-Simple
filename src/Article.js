// Global dependencies
import React, { Component } from 'react';

// Importing components from the files
import './Article.css';

// Created a component named Article and extends by telling the component this is a class
class Article extends Component {

// Imported components into Article.js to be rendered
  render() {

// Creating an object named style that contains our props
const style = {
    backgroundColor: this.props.tickleMe
  }

// Return everything in between a component's opening and closing tags
      return (
        <article style={style} className="Article">
        </article>

    );
  }
}

// Exporting to give access to use Article, allows other indexes to reference Article
export default Article;