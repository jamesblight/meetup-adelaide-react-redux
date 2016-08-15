import React, { Component, PropTypes } from 'react';
import Day from '../Day';
import './style.css';

class Week extends Component {
  static propTypes = {
    weekDates: PropTypes.array.isRequired,
    selectedDate: PropTypes.object.isRequired
  }

  render() {
    return (
      <tr className="Week">
        { this.props.weekDates.map((date, i) => (
          <Day
            key={i}
            date={date}
            selected={this.props.isSelected(date)}
            outsideMonth={this.props.isOutsideMonth(date)}
          />
        ))}
      </tr>
    )
  }
}

export default Week;
