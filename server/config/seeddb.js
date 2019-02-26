    // *******************************************************
// Controller File
// -------------------------------------------------------
// This file outlines the actions to see the
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
import * as LOGIC from '../database/logic';
import * as SEED_DATA from './data';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
export const SEED_DB = async () => {
    //Function to add adin accounts if none are found
    // const users = await TABLES.USER.CONTROLLER.read({role: 'admin'});
    // if (!users) {
    //     registerAdminAccounts();
    // }

    const organisations = await LOGIC.TABLES.ORGANISATION.CONTROLLER.readMany();
    if (organisations.length === 0) {
        const nOrgs = await registerOrganisations();
    }

    const roles = await LOGIC.TABLES.ROLE.CONTROLLER.readMany();
    if (roles.length === 0) {
        const nRoles = await registerRoles();
    }

    registerAdminAccounts();
}

const registerOrganisations = async () => {
    let newOrgs = [];
    SEED_DATA.ORGANISATIONS.forEach(async (data) => {
        const newOrg = await LOGIC.TABLES.ORGANISATION.CONTROLLER.create(data);
        newOrgs.push(newOrg)
    })
    return newOrgs;
}

const registerRoles = async () => {
    let roles = [];
    SEED_DATA.ROLES.forEach(async (data) => {
        const newRole = await LOGIC.TABLES.ROLE.CONTROLLER.create(data);
        roles.push(newRole);
    })
    return roles;
}

const registerAdminAccounts = async () => {
    let accounts = []
    SEED_DATA.ACCOUNTS.forEach(async (data) => {
        const account = await LOGIC.CONTROLLER.createAccount(data);
        accounts.push(account);
    })
    return accounts;
}

// const registerAdminAccounts = async () => {
//     ACCOUNTS.forEach(async (data) => {
//         const userData = await TABLES.USER.UTILITIES.convertAppUserToDatabaseUser({...data});
//         const newUser = await TABLES.USER.CONTROLLER.register({...userData, role: 'admin'}, data.password);
//         const profile = await TABLES.PROFILE.CONTROLLER.create(new TABLES.PROFILE.SCHEMA(profileData));
//     });
// }

export default SEED_DB
