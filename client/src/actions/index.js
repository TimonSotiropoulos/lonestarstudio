// *******************************************************
// Action Constant Generators
// -------------------------------------------------------

// *******************************************
// Utility Imports
// -------------------------------------------
import * as TYPES_ from './_types';
import * as UTILS_ from './_utilities';
import respack from 'respack';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
export const APP = {
    // defaultAsyncAction: UTILS.createAsyncAction(TYPES.EXAMPLE_ASYNC_ACTION_KEY, RESPACK.TYPE.GET, '/api/start', null, CONSTANTS.ROUTES.HOME_PAGE),
    // defaultSyncAction: UTILS.createSyncAction(TYPES.EXAMPLE_SYNC_ACTION_KEY),
}

export const AUTH = {
    login: UTILS_.createAsyncAction(TYPES_.LOGIN, respack.TYPE.POST, '/api/account/login', null, null),
}
// --------------------------------

// *******************************************
// Export
// -------------------------------------------
export const TYPES = TYPES_;
export const UTILS = UTILS_;
// --------------------------------
