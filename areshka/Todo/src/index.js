import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reducer from './reducer';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Reducer />
  </Provider>,
  document.getElementById('root')
);
