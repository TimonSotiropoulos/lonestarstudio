// *******************************************************
// Database Controller
// -------------------------------------------------------
// This file is where our application interfaces with
// our tables and handles al the business logic of doing tasks
// that cross multiple different tables
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
import * as TABLES from '../tables';
// --------------------------------

// *******************************************
// Exports
// -------------------------------------------
export const createAccount = async (data = {}) => {

    if (!data.username || !data.password || !data.role) {
        console.error("ERROR: Cannot create account without a username or password");
        return null;
    }

    const accountData = {
        username: data.username,
        password: data.password,
        creationDate: new Date(),
        updateDate: new Date(),
        lastActive: new Date()
    }

    const newAccount = await TABLES.ACCOUNT.CONTROLLER.create(accountData);
    const newUser = await TABLES.USER.CONTROLLER.create({email: data.username});
    const defaultOrg = await TABLES.ORGANISATION.CONTROLLER.read({default: true});
    const role = await TABLES.ROLE.CONTROLLER.read({type: data.role});

    // We create a new bond between all of these seperate tables for this account
    const bond = {
        accountID: newAccount._id,
        organisationID: defaultOrg._id,
        roleID: role._id,
        userID: newUser._id
    }

    if (!bond.accountID || !bond.organisationID || !bond.roleID || !bond.userID) {
        console.error("ERROR: information for bond was missing.");
        return
    }

    const newBond = await TABLES.BOND.CONTROLLER.create(bond);
    return newAccount;
}

export const accountLoggedIn = async (data = {}) => {
    if (!data._id) {
        console.error("ERROR: Update Account Informatio After Login. No Account Supplied.");
        return null;
    }

    const updatedAcccount = await TABLES.ACCOUNT.CONTROLLER.update({_id: data._id}, {lastActive: Date.now()}, {upsert:true})
    return updatedAcccount;
}
// --------------------------------
