import React, { Component } from 'react';
import AppLayout from '../../components/AppLayout';
import CalendarContainer from '../../containers/CalendarContainer';
import MonthView from '../../components/Calendar/MonthView';

class App extends Component {
  renderHeader() {
    return (
      <div>
        <h2>Creating Web Applications With React and Redux</h2>
        <h3>3 Redux</h3>
      </div>
    );
  }

  render() {
    return (
      <AppLayout
        renderHeader={this.renderHeader}
      >
        <CalendarContainer>
          {({ year, month, selectedDate, setYearMonth,
              navigateNext, navigatePrevious, loadEvents }) => (
            <MonthView
              year={year}
              month={month}
              selectedDate={selectedDate}
              setYearMonth={setYearMonth}
              navigateNext={navigateNext}
              navigatePrevious={navigatePrevious}
              loadEvents={loadEvents}
            />
          )}
        </CalendarContainer>
      </AppLayout>
    );
  }
}

export default App;
