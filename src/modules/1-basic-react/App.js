import React, { Component } from 'react';
import AppLayout from '../../components/AppLayout';
import Calendar from '../../components/Calendar';
import MonthView from '../../components/Calendar/MonthView';

class App extends Component {
  renderHeader() {
    return (
      <div>
        <h2>Creating Web Applications With React and Redux</h2>
        <h3>1 Basic React</h3>
      </div>
    );
  }

  render() {
    return (
      <AppLayout
        renderHeader={this.renderHeader}
      >
        <Calendar>
          {(year, month, selectedDate) => (
            <MonthView year={year} month={month} selectedDate={selectedDate} />
          )}
        </Calendar>
      </AppLayout>
    );
  }
}

export default App;
