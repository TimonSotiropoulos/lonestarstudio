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
const User = new mongoose.Schema({
    first: String,
    last: String,
    name: String,
    email: String
});

export default mongoose.model('User', User);
// --------------------------------
