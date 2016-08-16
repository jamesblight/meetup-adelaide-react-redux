
export const NAVIGATE_PREVIOUS = 'NAVIGATE_PREVIOUS';
export const NAVIGATE_NEXT = 'NAVIGATE_NEXT';

export const LOAD_EVENTS = 'LOAD_EVENTS';
export const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_FAILURE = 'LOAD_EVENTS_FAILURE';

export const navigatePrevious = () => ({
  type: NAVIGATE_PREVIOUS
});

export const navigateNext = () => ({
  type: NAVIGATE_NEXT
});

export const loadEvents = () => ({
  type: LOAD_EVENTS
});
