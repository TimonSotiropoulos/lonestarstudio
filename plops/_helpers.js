// *******************************************************
// Helper Plop Functions
// -------------------------------------------------------

// *******************************************
// Implementations
// -------------------------------------------
const create = (plop) => {
    plop.addHelper('upperCase', text => text.toUpperCase())
}

module.exports = {
    create
};
// --------------------------------
