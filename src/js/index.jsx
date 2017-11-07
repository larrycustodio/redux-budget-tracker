import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';

//Provider wrapper to allow connect()
render(
    <Provider store={ store } >
        <App />
    </Provider>,
    document.getElementById('root')
);