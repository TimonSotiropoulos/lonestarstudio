// *******************************************************
// General Configuration file
// -------------------------------------------------------
// This file contains all the required startup files
// for configuring things related to the business logic
// and controllers of the application
// --------------------------------

// *******************************************************
// Module Imports
// -------------------------------------------------------
import * as CONTROLLERS from '../controllers';
// --------------------------------

// *******************************************************
// Implementation
// -------------------------------------------------------
const configureControllers = (app) => {
    // Add required configuration for specific business logic controllers here
    CONTROLLERS.PASSPORT.createStrategies(app);
}

export default configureControllers;
// -------------------------------------------
