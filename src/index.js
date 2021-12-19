// Global dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Importing components from the files
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Rendering the app component onto the root element of the HTML document
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
