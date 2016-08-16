import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { navigateNext, navigatePrevious, loadEvents } from '../actions';

const mapStateToProps = state => ({
  month: state.month,
  year: state.year,
  selectedDate: state.selectedDate
});

export default connect(mapStateToProps, {
  navigateNext,
  navigatePrevious,
  loadEvents
})(Calendar);
