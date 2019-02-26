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
const Role = new mongoose.Schema({
    type: {
        type: String,
        unique: true
    }
});

export default mongoose.model('Role', Role);
// --------------------------------
