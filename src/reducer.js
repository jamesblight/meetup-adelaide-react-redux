import * as actions from './actions';
import moment from 'moment';

const today = moment();

const initialState = {
  month: today.month(),
  year: today.year(),
  selectedDate: today,
  events: {},
  loadingEvents: false,
  loadedEvents: false
};

export default function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.NAVIGATE_PREVIOUS:
      const nextDate = moment().year(state.year)
                               .month(state.month)
                               .add(1, 'month');
      return {
        ...state,
        month: nextDate.month(),
        year: nextDate.year()
      };

    case actions.NAVIGATE_NEXT:
      const previousDate = moment().year(state.year)
                                   .month(state.month)
                                   .subtract(1, 'month');
      return {
        ...state,
        month: previousDate.month(),
        year: previousDate.year()
      };

    case actions.LOAD_EVENTS_REQUEST:
      return {
        ...state,
        loadingEvents: true
      };

    case actions.LOAD_EVENTS_SUCCESS:
      return {
        ...state,
        loadingEvents: false,
        loadedEvents: true,
        events: action.events
      };
    default:
      return state;
  }
}
