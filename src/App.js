import React, { Component } from 'react';
import AppLayout from './components/AppLayout';
import './App.css';

class App extends Component {
  renderHeader() {
    return <h2>Creating Web Applications With React and Redux</h2>;
  }

  render() {
    return (
      <AppLayout
        renderHeader={this.renderHeader}
      >
        <p className="App-intro">
          To get started, replace the <i> App</i> component rendered in
          <i> index.js</i> with the <i> App</i> component from
          <i> src/modules/1-basic-components</i>
        </p>
      </AppLayout>
    );
  }
}

export default App;
