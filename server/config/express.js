import path from "path";
import express from "express";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import secrets from "./secrets";

const configureExpress = (app) => {
	// X-Powered-By header has no functional value.
	// Keeping it makes it easier for an attacker to build the site's profile
	// It can be removed safely
	app.disable("x-powered-by")

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))

	// *******************************************************
	// EXPRESS TO SERVER STATIC ASSETS WHEN IN PRODUCTION MODE
	// *******************************************************
	if (process.env.APP_ENV === 'production' ||
		process.env.APP_ENV === 'staging') {
	    app.use(express.static('client/build'));
	    app.set('port', (process.env.PORT || 5000));
		process.env.PORT = (process.env.PORT || 5000);
		process.env.SERVER_PORT = (process.env.PORT || 5000);
		process.env.CLIENT_PORT = (process.env.PORT || 5000);
	} else {
		console.log("Setting Development Ports for EXPRESS");
	    app.set('port', (process.env.PORT || 3001));
		process.env.PORT = (process.env.PORT || 3001);
		process.env.SERVER_PORT = (process.env.PORT || 3001);
		process.env.CLIENT_PORT = 3000;
	}

	const sess = {
		resave: true,
		saveUninitialized: true,
		secret: secrets.sessionSecret,
		proxy: false,
		name: "sessionId",
		cookie: {
			httpOnly: true,
			secure: false
		}
	}

	var node_env = process.env.NODE_ENV;
	console.log('--------------------------');
	console.log('===> 😊  Starting Express Server . . .');
	console.log('===>  App Environment: ' + process.env.APP_ENV);
	if (process.env.APP_ENV === 'production' ||
		process.env.APP_ENV === 'staging') {
		console.log('===> 🚦  Note: In order for authentication to work in production');
		console.log('===>           you will need a secure HTTPS connection');
		sess.cookie.secure = true; // Serve secure cookies
	}

	app.use(session(sess));

	app.use(passport.initialize())
	app.use(passport.session())
}

export default configureExpress;
