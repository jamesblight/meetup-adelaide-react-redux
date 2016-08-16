import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './saga';
import reducer from './reducer';
import ReduxApp from './modules/3-redux/App';
import './index.css';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk, sagaMiddleware),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('root')
);
