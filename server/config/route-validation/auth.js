// *******************************************************
// Authorized Route Validation
// -------------------------------------------------------
// This file handles adding a middle ware that will ensure
// that a user is logged into an account and that their account
// is still active
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
export const AUTH = async (req, res, next) => {
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
        next();
    } catch (error) {
        console.log(error);
    }
}

export default AUTH;
// -------------------------------------------
