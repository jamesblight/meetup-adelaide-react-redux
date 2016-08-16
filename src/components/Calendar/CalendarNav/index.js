import React, { Component, PropTypes } from 'react';
import './style.css';

class CalendarNav extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="CalendarNav"
      >
        {this.props.children}
      </button>
    )
  }
}
export default CalendarNav;
