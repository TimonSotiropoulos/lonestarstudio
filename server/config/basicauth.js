// *******************************************************
// BASIC AUTHENTICATION FOR SIMPLE APPLIATION PROTECTION
// -------------------------------------------------------
// This file handles setting up basic auth for the application is required
//
// Ensure that the package basic-auth to get this to work
// ----> https://www.npmjs.com/package/basic-auth
// -------------------------------------------------------

// *******************************************************
// Module Imports
// -------------------------------------------------------
import * as SECRETS from './secrets';
// --------------------------------

// *******************************************************
// Implementation
// -------------------------------------------------------
const configureBasicAuth = (app) => {
    if (process.env.APP_ENV !== 'development') {
        app.use(basicAuth({
            users: {
        		[SECRETS.ROOT_USER]: SECRETS.ROOT_PASSWORD
        	},
        	challenge: true
        }));
    }
}

export default configureBasicAuth;
// -------------------------------------------
