// *******************************************************
// Loading Reducer
// -------------------------------------------------------
// Contains all Loading Information for Different Pages
// -------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import * as ACTIONS from '../actions';
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

    switch (actionType) {
        case ACTIONS.UTILS.KEYS.START:
            return addKeyToState(actionKey, state);
        case ACTIONS.UTILS.KEYS.ERROR:
            return removeKeyFromState(actionKey, state);
        case ACTIONS.UTILS.KEYS.FAILED:
            return removeKeyFromState(actionKey, state);
        case ACTIONS.UTILS.KEYS.SUCCESS:
            return removeKeyFromState(actionKey, state);
        default:
            return state
    }
}
// --------------------------------
