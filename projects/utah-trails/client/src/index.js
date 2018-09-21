import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import createStore from './redux';

ReactDOM.render(
  <Provider store={createStore}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
