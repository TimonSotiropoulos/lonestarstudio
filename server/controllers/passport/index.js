// *******************************************************
// Passport Controller file
// -------------------------------------------------------
// This file contains all the required functionality for
// setting up Passport for authentication within the
// application
// --------------------------------

// *******************************************************
// Module Imports
// -------------------------------------------------------
import passport from 'passport';
import Account from '../../database/tables/account/model';
import * as STRATEGIES from './strategies';
// --------------------------------

// *******************************************************
// Implementation
// -------------------------------------------------------
/**
 * @function createStrategies
 */
export const createStrategies = (app) => {
    passport.serializeUser(Account.serializeUser());
    passport.deserializeUser(Account.deserializeUser());

    // Strategies to use
    passport.use(STRATEGIES.LOCAL);
}

/**
 * @function authenticate
 */
export const authenticate = async (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
				reject(err);
			}
			resolve(user)
        })(req, res, next)
    });
}

/**
 * @function login
 */
export const login = async (user, req) => {
	return new Promise((resolve, reject) => {
		req.logIn(user, err => {
			if (err) {
				reject(err);
			}
			resolve(user)
		});
	});
}
// --------------------------------
