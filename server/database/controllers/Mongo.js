// *******************************************************
// Mongo Controller
// -------------------------------------------------------
// This file handles all connections to the MongoDB
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Implementations
// -------------------------------------------
export const create = async (SCHEMA) => {
    return SCHEMA.save()
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log("ERROR MESSAGE");
        console.log(error);
        return error;
    });
}

export const update = async (SCHEMA, query, data, options = {}) => {
    return SCHEMA.findOneAndUpdate(query, updateData, options)
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log("ERROR MESSAGE");
        return error;
    });
}

export const findAll = async (SCHEMA, query) => {
    return SCHEMA.find(query)
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log("ERROR MESSAGE");
        return error;
    });
}

export const findOne = async (SCHEMA, query) => {
    return SCHEMA.findOne(query)
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log("ERROR MESSAGE");
        return error;
    });
}

export const findOneAndUpdate = async (SCHEMA, query, data, options) => {
    return SCHEMA.findOneAndUpdate(query, data, options)
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log("ERROR MESSAGE");
        return error;
    });
}
// --------------------------------
