import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
