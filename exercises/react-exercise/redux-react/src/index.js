import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux';

const store = createStore( reducer )

store.subscribe(() => {
    let state = store.getState();
    console.log(state)
})

ReactDOM.render(
    <Provider store={ store } >
        <App /> 
    </Provider>,
document.getElementById('root'))