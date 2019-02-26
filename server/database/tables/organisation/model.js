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
const Schema = mongoose.Schema;
const Organisation = new Schema({
    name: String,
    default: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Organisation', Organisation);
// --------------------------------
