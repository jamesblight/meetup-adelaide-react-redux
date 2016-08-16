import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import BasicReactApp from './modules/1-basic-react/App';
import ComponentStateApp from './modules/2-component-state/App';
import './index.css';

/**
 * Replace <App /> with the App component from individual modules.
 *
 * eg.
 *    ReactDOM.render(
 *      <BasicReactApp />,
 *      document.getElementById('root')
 *    );
 *
 */
ReactDOM.render(
  <ComponentStateApp />,
  document.getElementById('root')
);
