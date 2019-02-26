// *******************************************************
// Local Passport Strategy
// -------------------------------------------------------
// This passport strategy is for logging in using MONGO
// and a username/password
//
// Code modified from : https://github.com/madhums/node-express-mongoose-demo/blob/master/config/passport/local.js
// -------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
import { Strategy } from 'passport-local';
import * as LOGIC from '../../../database/logic';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
const LOCAL = new Strategy(LOGIC.TABLES.ACCOUNT.MODEL.authenticate());
export default LOCAL;
// --------------------------------
