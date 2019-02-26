// *******************************************************
// Action Utiltiies File
// -------------------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
import respack from 'respack';
import { push } from 'react-router-redux';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------

/**
 * @Object KEYS
 * Contains the key constants used for generating different async actions
 */
export const KEYS = {
    START: "START",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    FAILED: "FAILED"
}

/**
 * @function createAsyncActionKeys
 * Creates a set of async action keys
 * @returns {Object} keys - An object containing the action key structure
 */
export const createAsyncActionKeys = (KEY) => {
    return {
        START: `${KEY}_${KEYS.START}`,
        SUCCESS: `${KEY}_${KEYS.SUCCESS}`,
        ERROR: `${KEY}_${KEYS.ERROR}`,
        FAILED: `${KEY}_${KEYS.FAILED}`,
        KEY: KEY
    }
}

/**
 * @function createStartAction
 * Creates a start action function when using Redux Sagas
 * @returns {Function} - A function that fires the start action
 */
export const createStartAction = (ACTION_TYPE) => {
    const actionGenerator = (data) => {
        return {
            type: ACTION_TYPE.START,
            data
        }
    }
    return actionGenerator;
}

/**
 * @function createAsyncAction
 * Creates an async action that takes a large number of params to call a back end api service
 * @params ACTION_KEY {Object} - The Async set of action keys
 * @params METHOD {String} - The type of api request required (either POST or GET)
 * @params API {String} - The API end point to call
 * @params HEADERS {Object} - THe header params to be passed with a request is needed
 * @params NEXT_ROUTE {String} - A String containing the next application route to navigate too is the request is sucessful (Eg after logging in succesfully)
 * @returns {Function}
 */
export const createAsyncAction = (ACTION_KEY, METHOD = respack.TYPE.GET, API = '/api', HEADERS = null, NEXT_ROUTE = null) => {

    const actionGenerator = (body = {}) => {
        return dispatch => {
            dispatch({
                type: ACTION_KEY.START
            });

            const makeRequest = (METHOD === respack.TYPE.GET) ? respack.GET : respack.POST;

            makeRequest(API, body, HEADERS)
            .then((data) => {
                switch(data.status) {
                    case respack.STATUS.OKAY:
                        dispatch({
                            type: ACTION_KEY.SUCCESS,
                            ...data.body
                        });
                        if (NEXT_ROUTE) {
                            setTimeout(() => {
                                dispatch(push(NEXT_ROUTE));
                            }, 250)
                        }
                        break;
                    case respack.STATUS.ERROR:
                        dispatch({
                            type: ACTION_KEY.ERROR,
                            ...data.body
                        });
                        break;
                    case respack.STATUS.FAILED:
                        dispatch({
                            type: ACTION_KEY.ERROR,
                            ...data.body
                        });
                        break;
                    default:
                        dispatch({
                            type: ACTION_KEY.ERROR,
                            ...data.body
                        });
                        break;
                }
            })
            .catch((error) => {
                console.log("Error Making api request");
                console.log(error);
                dispatch({
                    type: ACTION_KEY.ERROR
                });
            });
        };
    }

    return actionGenerator;
}

/**
 * @function createSyncAction
 * Creates a sync action that passes data to the redux store
 * @params ACTION_TYPE {Object} - The sync action key
 * @returns {Function}
 */
export const createSyncAction = (ACTION_TYPE) => {
    const actionGenerator = (data) => {
        return {
            type: ACTION_TYPE,
            data
        }
    }
    return actionGenerator;
}
// --------------------------------
