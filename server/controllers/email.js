// *******************************************************
// Email Controller file
// -------------------------------------------------------
// This file contains all required functions to do with
// sending emails to users
// --------------------------------

// *******************************************************
// Module Imports
// -------------------------------------------------------
import respack from 'respack';
// --------------------------------

// *******************************************************
// Singleton Implementations
// -------------------------------------------------------
var TRANSPORT;
// -------------------------------------------

// *******************************************************
// Implementation
// -------------------------------------------------------
export const createTransport = () => {
    // TRANSPORT = nodemailer.createTransport({
    // 	host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    // 	auth: {
    //         type: 'OAuth2',
    //         user: SECRETS.SUPPORT_EMAIL_USER,
    //         clientId: SECRETS.SUPPORT_EMAIL_CLIENT_ID,
    //         clientSecret: SECRETS.SUPPORT_EMAIL_CLIENT_SECRET,
    //         refreshToken: SECRETS.SUPPORT_EMAIL_REFRESH_TOKEN
    //     }
    // });
}
// -------------------------------------------
