import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import './style.css';

class Calendar extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    const today = moment();
    this.state = {
      year: today.year(),
      month: today.month(),
      selectedDate: today
    };
  }

  setYearMonth = (year, month) => {
    this.setState({
      year,
      month
    });
  }

  render() {
    const { children } = this.props;
    const { year, month, selectedDate } = this.state;

    return (
      <div className="Calendar">
        { children(
            year,
            month,
            selectedDate,
            this.setYearMonth
          )
        }
      </div>
    );
  }
}

export default Calendar;
