import React, { Component } from 'react';
import AppLayout from '../../components/AppLayout';

/**
 * The first module introduces rendering basic React components.
 * Concepts covered include:
 *    * React components
 *    * React elements
 *    * React instances
 *    * JSX
 *    * lifecycle methods
 *    * functional components
 */
class App extends Component {
  renderHeader() {
    return (
      <div>
        <h2>Creating Web Applications With React and Redux</h2>
        <h3>1 Basic React</h3>
      </div>
    );
  }

  render() {
    return (
      <AppLayout
        renderHeader={this.renderHeader}
      />
    );
  }
}

export default App;
