import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import './style.css';

class Calendar extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    year: PropTypes.number,
    month: PropTypes.number,
    selectedDate: PropTypes.object
  }

  static defaultProps = {
    year: moment().year(),
    month: moment().month(),
    selectedDate: moment()
  }

  render() {
    const { children, year, month, selectedDate } = this.props;
    return (
      <div className="Calendar">
        { children(year, month, selectedDate) }
      </div>
    );
  }
}

export default Calendar;
