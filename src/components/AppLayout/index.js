import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './style.css';

class AppLayout extends Component {
  static propTypes = {
    renderHeader: PropTypes.func.isRequired,
    children: PropTypes.node
  }

  render() {
    const { renderHeader, children } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { typeof renderHeader === 'function' ? renderHeader() : null }
        </div>
        { children }
      </div>
    );
  }
}

export default AppLayout;
