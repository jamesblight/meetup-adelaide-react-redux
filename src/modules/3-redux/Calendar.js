import React, { Component, PropTypes } from 'react';
import './style.css';

class Calendar extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    selectedDate: PropTypes.object.isRequired,
    navigateNext: PropTypes.func.isRequired,
    navigatePrevious: PropTypes.func.isRequired,
    loadEvents: PropTypes.func.isRequired
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <div className="Calendar">
        { children(props) }
      </div>
    );
  }
}

export default Calendar;
