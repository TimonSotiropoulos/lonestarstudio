// *******************************************************
// Error Reducer
// -------------------------------------------------------
// Contains all the provided error messages coming
// from the backend of the system
// -------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import * as ACTIONS from '../actions';
// --------------------------------

// *******************************************
// Initial State Definition
// -------------------------------------------
const initialState = {
    keys: [],
    messages: {}
};
// --------------------------------

// *******************************************
// Reducer Utilities
// -------------------------------------------
const removeKeyFromState = (KEY, state) => {
    const {[KEY]: value, ...messages } = state.messages;
    return {
        keys: state.keys.filter((item) => {return item !== KEY}),
        messages: messages
    };
}

const addKeyToState = (KEY, action, state) => {
    return {
        keys: state.keys.concat([KEY]),
        messages: {
            ...state.messages,
            [KEY]: action.message
        }
    };
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
            return removeKeyFromState(actionKey, state);
        case ACTIONS.UTILS.KEYS.ERROR:
            return addKeyToState(actionKey, action, state);
        case ACTIONS.UTILS.KEYS.FAILED:
            return addKeyToState(actionKey, action, state);
        default:
            return state
    }
}
// --------------------------------
