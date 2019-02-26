// *******************************************************
// Database Views
// -------------------------------------------------------
// This file is where our application interfaces with
// our tables and handles creating virtual tables that combine
// data in an SQL style manner.
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
import UTILS from '@timoncs/utilities';
import * as TABLES from '../tables';
// --------------------------------

// *******************************************
// Exports
// -------------------------------------------
export const getAccountData = async (data = {}) => {

    const accountID = data._id;
    const bonds = await TABLES.BOND.CONTROLLER.readMany({accountID});

    let profiles = [];

    await UTILS.GENERAL.asyncForEach(bonds, async (bond) => {
        const results =  await Promise.all([
            TABLES.ORGANISATION.CONTROLLER.readByID(bond.organisationID),
            TABLES.USER.CONTROLLER.readByID(bond.userID),
            TABLES.ROLE.CONTROLLER.readByID(bond.roleID)
        ]);
        const org = results[0];
        const user = results[1];
        const role = results[2];
        profiles.push({
            first: user.first,
            last: user.last,
            name: user.name,
            email: user.email,
            org: org.name,
            role: role.type,
        });
    });

    return {
        profiles: profiles
    }
}
// --------------------------------
