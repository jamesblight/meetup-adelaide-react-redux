import React, { Component } from 'react';
import './style.css';

class CalendarNav extends Component {
  render() {
    return (
      <button className="CalendarNav">{this.props.children}</button>
    )
  }
}
export default CalendarNav;
