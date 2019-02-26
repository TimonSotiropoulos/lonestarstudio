// *******************************************************
// Application Entry Point
// -------------------------------------------------------
// This is the entry point for the entire application.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './config/reduxStore';

// Add the below lines if redux persistance is required
// import { store, persistor, history } from './config/reduxStore'
// import { PersistGate } from 'redux-persist/integration/react'

import App from './pages/_App';
import 'sanitize.css/sanitize.css';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
const rootDiv = document.querySelector('#root');

console.log(ConnectedRouter);

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
), rootDiv)
// --------------------------------
