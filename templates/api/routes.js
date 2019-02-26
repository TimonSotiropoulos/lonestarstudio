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

    {{#each routes}}
    app.use('/api/{{lowerCase this}}', API.{{constantCase this}}.PUBLIC);
    app.use('/api/auth/{{lowerCase this}}/', API.{{constantCase this}}.AUTH);
    app.use('/api/admin/{{lowerCase this}}/', API.{{constantCase this}}.ADMIN);

    {{/each}}
}

export default configureRoutes;
// -------------------------------------------
