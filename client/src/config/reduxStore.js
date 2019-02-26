// *******************************************************
// Redux Store Constructor
// -------------------------------------------------------
// This file creates and defines the setup for our redux
// integrated state management system
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
// --------------------------------

export const history = createHistory();

const persistConfig = {
  key: 'root',
  whitelist: [],
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }

    // Add Logger to middle ware!
    middleware.push(logger);
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export const store = createStore(persistedReducer, {}, composedEnhancers);
export const persistor = persistStore(store);
