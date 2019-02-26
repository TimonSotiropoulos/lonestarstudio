// *******************************************************
// Account API File - Public
// -------------------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
import express from 'express';
import respack from 'respack';
import * as LOGIC from '../../database/logic';
import * as CONTROLLERS from '../../controllers';
// --------------------------------

// *******************************************
// API Route Constants
// -------------------------------------------
const LOGIN = '/login';
// --------------------------------

// *******************************************
// Implementations
// -------------------------------------------
const login = async (req, res, next) => {
    try {
        // Check to see if we have both the username and password
        if (!req.body.username || !req.body.password) {
            throw new Error("User name or Password not provided");
        }

        // Check the authentication against passport and attempt to log the user in
        const account = await CONTROLLERS.PASSPORT.authenticate(req, res, next);
        await CONTROLLERS.PASSPORT.login(account, req);

        // Update the account table with any info it needs when it is logged in
        LOGIC.CONTROLLER.accountLoggedIn(account);

        // Retreive the full account information to be used by the client and send it off
        const profile = await LOGIC.VIEWS.getAccountData(account);

        // Return the resulting account
        return res.json(respack.OKAY({account: profile}));

    } catch (error) {
        console.log(error);
        return res.send(respack.ERROR({message: error.message}));
    }

};


// ********************
// API Routes
// --------------------
const router = express.Router();
router.get('/test', async (req, res, next) => { res.json(respack.OKAY({ hello: 'WORLD' })); });
router.post(LOGIN, login);
// --------------------
export default router;
// --------------------------------
