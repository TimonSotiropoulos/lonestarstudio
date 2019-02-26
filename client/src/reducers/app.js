// *******************************************************
// App Reducer
// -------------------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
// import ACTIONS from '../actions';
// --------------------------------

// *******************************************
// Initial State Definition
// -------------------------------------------
const initialState = {
    example: "DATA"
}
// --------------------------------

// *******************************************
// Reducer Implementation
// -------------------------------------------
export default (state = initialState, action) => {
    switch (action.type) {
        /* *************************
           EXAMPLE IMPLEMENTATION
        /  *************************
        case ACTIONS.TYPES.EXAMPLE:
            return {
                ...state,
                example: action.data
            }
        */
        default:
            return state
    }
}
// --------------------------------
