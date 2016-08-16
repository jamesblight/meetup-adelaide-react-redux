import React, { Component, PropTypes } from 'react';
import { Calendar } from 'calendar';
import moment from 'moment';
import Week from '../Week';
import CalendarNav from '../CalendarNav';
import './style.css';

const cal = new Calendar();
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class MonthView extends Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    selectedDate: PropTypes.object.isRequired,
    navigateNext: PropTypes.func.isRequired,
    navigatePrevious: PropTypes.func.isRequired,
    loadEvents: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadEvents();
  }

  isSelected = (date) => {
    return moment(date).isSame(this.props.selectedDate, 'day');
  }

  isOutsideMonth = (date) => {
    return !moment(date).isSame(
      moment().year(this.props.year).month(this.props.month),
      'month'
    );
  }

  render() {
    const { year, month, selectedDate, navigateNext, navigatePrevious } = this.props;
    const monthDates = cal.monthDates(year, month);

    return (
      <table className="MonthView">
        <thead>
          <tr className="MonthView-header">
            <th><CalendarNav onClick={navigatePrevious}>&larr;</CalendarNav></th>

            <th colSpan="5">{`${monthNames[month]} ${year}`}</th>

            <th><CalendarNav onClick={navigateNext}>&rarr;</CalendarNav></th>
          </tr>

          <tr className="MonthView-daysHeader">
            { dayNames.map(d => <th key={d}>{d.slice(0, 2)}</th>) }
          </tr>
        </thead>

        <tbody>
          { monthDates.map((weekDates, i) => (
            <Week
              key={i}
              weekDates={weekDates}
              selectedDate={selectedDate}
              isSelected={this.isSelected}
              isOutsideMonth={this.isOutsideMonth}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default MonthView;
