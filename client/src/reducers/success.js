// *******************************************************
// Success Reducer
// -------------------------------------------------------
// Contains all Success Information for displaying things after
// a successful api request
// -------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import * as ACTIONS from '../actions';
import { LOCATION_CHANGE } from 'react-router-redux';
// --------------------------------

// *******************************************
// Initial State Definition
// -------------------------------------------
const initialState = [];
// --------------------------------

// *******************************************
// Reducer Utilities
// -------------------------------------------
const removeKeyFromState = (KEY, state) => {
    return state.filter((item) => {return item !== KEY});
}

const addKeyToState = (KEY, state) => {
    return state.concat([KEY]);
}
// --------------------------------


// *******************************************
// Reducer Implementation
// -------------------------------------------
export default (state = initialState, action) => {

    const endOfKey = action.type.lastIndexOf('_');
    const actionKey = action.type.slice(0, endOfKey);
    const actionType = action.type.slice(endOfKey+1, action.type.length);

    if (action.type === LOCATION_CHANGE) {
        return initialState;
    }

    switch (actionType) {
        case ACTIONS.UTILS.KEYS.START:
            return removeKeyFromState(actionKey, state);
        case ACTIONS.UTILS.KEYS.SUCCESS:
            return addKeyToState(actionKey, state);
        default:
            return state
    }
}
// --------------------------------
