// app.js
// *******************************************************
// Module Imports
// -------------------------------------------------------
import fs from 'fs';
import path from 'path';
import express from 'express';
import http from 'http';
import https from 'https';
import * as CONFIG from './config';
// -------------------------------------------

// *******************************************************
// Create the Application using Express
// -------------------------------------------------------
const app = express()
// -------------------------------------------

// *******************************************************
// Configure Functions
// -------------------------------------------------------
CONFIG.EXPRESS(app);
CONFIG.DATABASE.MONGO();
CONFIG.CONTROLLERS();
CONFIG.ROUTES(app);
CONFIG.BASIC_AUTH(app);
// -------------------------------------------

// *******************************************************
// SET CLIENT SIDE APPLICATION DIRECTORY
// -------------------------------------------------------
const CLIENT_DIRECTORY = (process.env.APP_ENV === 'production' || process.env.APP_ENV === 'staging') ? '../client/build' : '../client/public';
const ROOT_DIRECTORY = path.join(__dirname, CLIENT_DIRECTORY);

// Set the static file location in production to be the client build folder for the front end files
if (process.env.APP_ENV === 'production') {
	app.use(express.static(ROOT_DIRECTORY));
}

app.use("*", (req, res, next) => {
	res.sendFile('index.html', { root: path.join(__dirname, CLIENT_DIRECTORY)});
})
// -------------------------------------------

// *******************************************************
// SERVER START
// -------------------------------------------------------
const createHTTPServer = (app) => {
	console.log(`Building HTTP Server for Application`);
	return http.createServer(app);
}

const createHTTPSServer = (app) => {
	console.log(`Building HTTPS Secure Server for Application`);
	const privateKey  = fs.readFileSync(secrets.PRIVATE_KEY_PATH, 'utf8');
	const certificate = fs.readFileSync(secrets.SSL_CERT_PATH, 'utf8');
	const credentials = {
		key: privateKey,
		cert: certificate
	}
	return https.createServer(credentials, app);
}

const server = (process.env.APP_ENV === 'production' && process.env.APP_LOCATION !== 'local') ? createHTTPSServer(app) : createHTTPServer(app);

// Redirect Server
if (process.env.APP_LOCATION !== 'local') {
	console.log("Creating HTTP -> HTTPS Redirect Server");
	http.createServer(function (req, res) {
	    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
	    res.end();
	}).listen(80);
}

server.listen(app.get('port'), () => {
	console.log(`Application Mode: ${process.env.APP_ENV}`);
	console.log(`Applicaiton Build: ${process.env.NODE_ENV}`);
  	console.log(`The Server is currently running on PORT: ${process.env.PORT}`); // eslint-disable-line no-console
});
// -------------------------------------------
