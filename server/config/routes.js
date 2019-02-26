// *******************************************************
// Routes Configuration File
// -------------------------------------------------------
// This file contains all the route configuration for
// the different API routes in the file.
//
// NOTES: This file is generated automatically when a new
// route it added via the generator function. #magic
// --------------------------------

// *******************************************************
// Module Imports
// -------------------------------------------------------
import * as API from '../api';
import * as ROUTE_VALIDATOR from './route-validation';
// --------------------------------

// *******************************************************
// Implementation
// -------------------------------------------------------
const configureRoutes = (app) => {

    // This middle ware will intecept any end points using the admin or auth endpoints and
    // will force them to be valid based on the connected middleware
    app.all('/api/auth/*', ROUTE_VALIDATOR.AUTH);
    app.all('/api/admin/*', ROUTE_VALIDATOR.ADMIN);

    app.use('/api/account', API.ACCOUNT.PUBLIC);
    app.use('/api/auth/account/', API.ACCOUNT.AUTH);
    app.use('/api/admin/account/', API.ACCOUNT.ADMIN);

}

export default configureRoutes;
// -------------------------------------------
