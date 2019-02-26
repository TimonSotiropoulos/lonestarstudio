// *******************************************************
// Model File
// -------------------------------------------------------
// This file outlines the DB structure for the client table
// This will normally contain the table schema
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
import mongoose from 'mongoose';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
const Bond = {
    accountID: {
        type: String,
        required: true
    },
    organisationID: {
        type: String,
        required: true
    },
    roleID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
};
export default mongoose.model('Bond', Bond);
// --------------------------------
