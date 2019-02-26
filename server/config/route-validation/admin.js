// *******************************************************
// Admin User Route Validation
// -------------------------------------------------------
// This file handles adding a middle ware that will ensure
// that a user attempting to access an API endpoint will
// be valid, and of the usertype ADMIN
// --------------------------------

// *******************************************************
// Module Imports
// -------------------------------------------------------
import * as TABLES from '../../database/tables';
import respack from 'respack';
// --------------------------------

// *******************************************************
// Implementation
// -------------------------------------------------------
export const ADMIN = async (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            return res.json(respack.ERROR({message: 'Unauthorized Access: User not logged in.'}));
        }
        const user = req.user;
        if (!user) {
            return res.json(respack.ERROR({message: 'Unauthorized Access: User not found.'}));
        }
        const dbUser = await TABLES.USER.CONTROLLER.readByID(user.id);
        if (!dbUser) {
            return res.json(respack.ERROR({message: 'Unauthorized Access: User not found in database.'}));
        }
        if (dbUser.userType !== CONSTANTS.USER_TYPES.ADMIN) {
            return res.json(respack.ERROR({message: 'Unauthorized Access: incorrect user type'}));
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default ADMIN;
// -------------------------------------------
