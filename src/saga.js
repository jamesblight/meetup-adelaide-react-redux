import { take, put, call, fork } from 'redux-saga/effects';
import {
  LOAD_EVENTS,
  LOAD_EVENTS_REQUEST,
  LOAD_EVENTS_SUCCESS
} from './actions';
import { fetchEvents } from './api';

function* watchLoadEvents() {
  while (true) {
    yield take(LOAD_EVENTS);

    yield put({ type: LOAD_EVENTS_REQUEST });
    const response = yield call(fetchEvents);

    yield put({ type: LOAD_EVENTS_SUCCESS, events: response });
  }
}

export default function* rootSaga() {
  yield fork(watchLoadEvents);
}
