// *******************************************************
// Controller File
// -------------------------------------------------------
// This file outlines the actions that can be performed
// directly on the database table for this model
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
import SCHEMA from './model';
import * as CONTROLLERS from '../../controllers';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------

/**
 * @function create
 * Creates a new entry in the database
 * @returns
 */
export const create = async (object) => {
    const account = new SCHEMA(object);
    return SCHEMA.register(account, object.password)
    .then((user) => {
        return user;
    }).catch((err) => {
        return err;
    });
}

/**
 * @function read
 * Reads one record from the database based on provided ID
 * @param {string} ID
 * @returns {Object} data - One record from the database defined by the passed ID
 */
export const read = async (query) => {
	const data = await CONTROLLERS.MONGO.findOne(SCHEMA, query);
    return data;
}

/**
 * @function readByID
 * Reads one record from the database based on provided ID
 * @param {string} ID
 * @returns {Object} data - One record from the database defined by the passed ID
 */
export const readByID = async (ID) => {
	const data = await CONTROLLERS.MONGO.findOne(SCHEMA, {_id: ID});
    return data;
}

/**
 * @function readMany
 * Reads all elements from the database that are not deleted
 * @returns {Object[]} data - An array of all elements stored in the table
 */
export const readMany = async (query) => {
    const data = await CONTROLLERS.MONGO.findAll(SCHEMA, query);
    return data;
}

/**
 * @function update
 * Reads one record from the database based on provided ID and update with new data
 * @returns {Object[]} data - An array of all elements stored in the table
 */
export const update = async (query, dataToUpdate, options) => {
	const data = await CONTROLLERS.MONGO.findOneAndUpdate(SCHEMA, query, dataToUpdate, options);
    return data;
}

/**
 * @function deleteById
 * Deletes one record from the database based on provided ID
 * @param {string} ID
 * @returns {Object} data - One record from the database defined by the passed ID
 */
export const deleteById = async (ID) => {
	const data = await CONTROLLERS.MONGO.findOneAndUpdate(SCHEMA, {_id: ID}, {isDeleted: true, updateDate: Date.now()}, {upsert:true});
    return data;
}
// --------------------------------
