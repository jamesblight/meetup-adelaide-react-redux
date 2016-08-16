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
    selectedDate: PropTypes.object.isRequired
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

  navigateNext = () => {
    const { year, month, setYearMonth } = this.props;
    const previousDate = moment().year(year).month(month).subtract(1, 'month');

    setYearMonth(previousDate.year(), previousDate.month());
  }

  navigatePrevious = () => {
    const { year, month, setYearMonth } = this.props;
    const nextDate = moment().year(year).month(month).add(1, 'month');

    setYearMonth(nextDate.year(), nextDate.month());
  }

  render() {
    const { year, month, selectedDate } = this.props;
    const monthDates = cal.monthDates(year, month);

    return (
      <table className="MonthView">
        <thead>
          <tr className="MonthView-header">
            <th><CalendarNav onClick={this.navigatePrevious}>&larr;</CalendarNav></th>

            <th colSpan="5">{monthNames[month]}</th>

            <th><CalendarNav onClick={this.navigateNext}>&rarr;</CalendarNav></th>
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
