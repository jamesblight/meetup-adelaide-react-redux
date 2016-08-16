import React, { Component } from 'react';
import AppLayout from '../../components/AppLayout';
import Calendar from '../../components/Calendar';
import MonthView from '../../components/Calendar/MonthView';

class App extends Component {
  renderHeader() {
    return (
      <div>
        <h2>Creating Web Applications With React and Redux</h2>
        <h3>2 Component State</h3>
      </div>
    );
  }

  render() {
    return (
      <AppLayout
        renderHeader={this.renderHeader}
      >
        <Calendar>
          {(year, month, selectedDate, setYearMonth) => (
            <MonthView
              year={year}
              month={month}
              selectedDate={selectedDate}
              setYearMonth={setYearMonth}
            />
          )}
        </Calendar>
      </AppLayout>
    );
  }
}

export default App;
