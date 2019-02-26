// *******************************************************
// Main Application Container
// -------------------------------------------------------
// The is the mia entry point of the application. Here is where
// all the base files are introduced and the router is held
// within this file as well.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import * as Pages from './index.js';
import * as CONSTANTS from '../constants';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path={CONSTANTS.ROUTES.HOME} component={Pages.Home} />
                    <Route exact path={CONSTANTS.ROUTES.LOGIN} component={Pages.Login} />
                    <Route exact path={CONSTANTS.ROUTES.CMS} component={Pages.CMS} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
// --------------------------------
