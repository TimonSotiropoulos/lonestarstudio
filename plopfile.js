// *******************************************************
// Plopfile
// -------------------------------------------------------
// This file contains all the logic for running the
// generator functions that will spit out parts of the
// boilerplate code that works within the application.
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
var fs = require('fs');
var GENERATORS = require('./plops');
var HELPERS = require('./plops/_helpers');
// --------------------------------

// *******************************************
// Implementations
// -------------------------------------------

module.exports = function (plop) {
    // *****************************
    // HELPERS
    // -----------------------------
    HELPERS.create(plop);

    // *****************************
    // GENERATORS
    // -----------------------------
    // GENERATORS.TEST.create(plop);
    GENERATORS.API.create(plop);
    GENERATORS.TABLE.create(plop);
};
