// *******************************************************
// Configure Database File
// -------------------------------------------------------
// This file contains all the required startup files
// for configuring things related to the business logic
// and controllers of the application
// --------------------------------

// *******************************************************
// Module Imports
// -------------------------------------------------------
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import SECRETS from './secrets';
import * as CONFIG from './index';
// --------------------------------

// *******************************************************
// Implementation
// -------------------------------------------------------
export const MONGO = () => {
    mongoose.Promise = bluebird;
    mongoose.connect(SECRETS.DB, { promiseLibrary: bluebird, useNewUrlParser: true  })
      .then(() =>  {
          console.log('Mongo Connection Setup Successfully') ;
          CONFIG.SEED_DB();
      })
      .catch((err) => console.error(err));
}

export default {
    MONGO
}
// -------------------------------------------
