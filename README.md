
# React Boiler
A react boiler plate code base using node, express and create react app.

## Table of Contents

TBC

## About This Project
This project is a boilerplate setup to be provided as a quick start for people wanting to build a React - Node project. It is setup so that the seperate branches of the project can be used as different starting points, depending on what kind of application you want to build.

The idea behind this repo was to be able to create a standardized structure for building a front end application, that coudl then later have a node backend immediately added to it if required in the future.

- front-end-only: An expanded implementation of Create-React-App version 1. This also includes the Redux Framework and has been setup for SASS development.
- node-backend: An extention on the above front-end-only code that includes a complete node.js backend with express. 

##Prerequisites

This boilerplate code requires the installation of the following tools.

[Node.js](https://nodejs.org/en/)

## Downloading and Running the Boilerplate Code

To run the boilerplate code, you will need to download and install it from the repository. This can be achieved by the following:

	git clone https://github.com/TimonSotiropoulos/react-boiler
	
From there, you need to install the npm packages required by the three seperate parts of the application.

	# navigate to where you cloned the Github project
	npm install
	cd ./client && npm install
	cd ./server && npm install
	
This will install all the packages required by the main project that starts the client and server, as well as the client packages and server packages.

Then from the root of the project, a large number of helper functions have been setup to get the app running for you. This can be run by doing the following:

	# navigate to the project root
	npm start

## Project Structure

The project structure is out lined as follows:

	- client/ ---| <!-- Contains all the Client Side Code -->
			<!-- Config code of Create React App after Ejecting -->
			- src/ --- |
					- actions/
					- assets/ --- |
							- fonts/
							- images/
					- components/
					- constants/
					- config/
					- pages/
					- reducers/
					- styles/
					- index.js
			- package.json
	- server/ ---| <!-- Contains all the Server Side Code -->
			- api/
			- config/
			- constants/
			- controllers/
			- database/ -- |
					- controllers/
					- tables/
					- views/
			- server.js
			- package.json
	- deploy/ ---| <!-- Contains all the Deployment Scripts -->
	         - _dev/ 
	         - _stag/ 
	         - _prod/ 
	         - roles/ 
	         - deploy_app.yml
	         - run_commands.yml
	         - server_setup.yml
	- Makefile
	- package.json
	- processes.json
	- README.md
	
## Client
The client side of the application is built primarily using Create React App (v1). It has been ejected to allow for further customisation, the main of which is SASS functionality. Other then this, the client side uses a realtively standard application structure for a client side React application. Notable differences include:

### Action Generators
This application has been structured in a way so that the language that talks between the back end and front end is made consistent using a package called [respack](https://github.com/TimonSotiropoulos/respack). This abstraction of a simple api communication layer allows our action files to be generically generated based on a large number of imformatino provided to the generator function.

	/**
	 * @function createAsyncAction
	 * Creates an async action that takes a large number of params to call a back end api service
	 * @params ACTION_KEY {Object} - The Async set of action keys
	 * @params METHOD {String} - The type of api request required (either POST or GET)
	 * @params API {String} - The API end point to call
	 * @params BODY {Object} - THe body params to be passed with a POST request
	 * @params NEXT_ROUTE {String} - A String containing the next application route to navigate too is the 	request is sucessful (Eg after logging in succesfully)
	 * @returns {Function}
	 */
	 export const createAsyncAction = (ACTION_KEY, METHOD = RESPACK.TYPE.GET, API = '/api', BODY = {}, NEXT_ROUTE = null)

A simple explination of this functionality is that when an async action is called, the action key that is passed will first dispatch the _ACTIONKEY.START_ for your reducers to handle. Once the API call is complete, it will either call _ACTIONKEY.SUCCESS_ or _ACTIONKEY.ERROR_, so build your reducers to handle both of these outcomes as well.

### Style Classes

This application instead of using a BEM styled system, instead using something a bit simpler. It will automatically build a generic set of styles for the user, these can then be applied as classNames in a 'inline style' like way. This avoids the need for specific styling for each individual component, and instead makes the styling for each components extremely easy to read within the one file. An example of a simple NavigationBar component can be seen below using this style:

	// *******************************************
	// Component Implementation
	// -------------------------------------------
	class NavigationBar extends Component {
	
	    render = () => {
	        return (
	            <div className={[S.Width._100, S.Layout.flexRow, S.Layout.altAxisCenter, S.Layout.mainAxisBetween, S.Padding.Left_50, S.Padding.Right_50].join(" ")} style={{height: CONSTANTS.DIMENSIONS.NAVIGATION_BAR_HEIGHT}}>
	                <Link to={CONSTANTS.ROUTES.HOME} style={{cursor: 'pointer'}}>
	                    <C.Image image={LOGO} width={66} height={45} />
	                </Link>
	                <div className={[S.Layout.flexRow, S.Layout.altAxisCenter].join(" ")}>
	                    <div className={[S.Fonts.normal, S.Fonts.Colour_black, S.Fonts.Size_16, S.Margin.Right_10].join(" ")}>Welcome Back!</div>
	                    <C.Image image={PROFILE} width={45} height={45} circle />
	                </div>
	            </div>
	        );
	
	    }
	}
	
	export default NavigationBar;
	// --------------------------------
	
To setup this style implementation to work, you will need to add any specific colours to the _Colours.scss_ file. The first section adds colours in tuples, the first of which will be the base colour and the second of which will be the hover colour. Once these colours are added, the application will automatically generate the required colours for use across the entire application.

For more information on what is also provided in each of these files, see the SCSS files themselves which have further instructions on how to use each of the different SCSS functionality.

### Proxy Connection to the Server

During development the Client is served via a Webpack Development Server. As such, this will be running on port 3000 while the server will be running on port 3001. As such there is a proxy connection setup inside he package.json file of this project to proxy connections to port 3001. This allows correct testing of the back end in development. 

In production, the Client folder is bundled using webpack, so just these bundle files are provided by the server.

## Server

The server file is again a realtively straight forward implementation of a Node/Express backend for a system. The backend of this application again uses a package called [respack](https://github.com/TimonSotiropoulos/respack) to handle the responses between the client and the server. You will see it used alot through here. The main folders that might need a bit of additional explanation are below:

 
### Controllers
This folder contains any additional functionality that the API's require. A good example would be an Email Transport for sending emails after certain API's are completed (like sending a password reset) or a PDF generating set of functions (if reports are required based on API endpoint hitting). 

### Database

This folder contains a relatively organised way of handling talking to the database of the application. This contains three folders called _controllers/_, _tables/_ and _views/_. There are explained and outlined below:

#### Database/Controllers
The database controllers are all the functionality that requires going to the database and getting the required information. Overtime, this will be extended with common database controllers as the functionality for these will not end up being application specific. Two examples of this could be a Google SpreadSheets Controller, that handles saving and reading data from a google spreadsheet using the Google Sheets API. Another example could be a Mongoose/MongoDB controller that interfaces with a Mongo Database.

#### Database/Tables
THe database tables folder outline the different tables that are included in your application. These have a generic structure that must be followed, (an example is provided in the code base). An example implementation of a User table is outlined below:

	- database/ ---|
			- controller/
			- tables/ ---|
					- user/ ---|
							- controller.js
							- index.js
							- model.js
			- views/
				
Inside this table structure there are 2 important files. The model.js file and the controller.js file. The _model.js_ file contains the structure or Schema of your table. An outlined example of what would be in this file for a User could be (this is using mongoose to create the MongoDB Schema):

	// *******************************************
	// Implementation
	// -------------------------------------------
	const USER = new Schema({
   		userID: String,
    	fName: String,
	    lName: String,
    	fullName: String,
    	company: String,
	    profileImage: String
    });
	export default USER;
	// --------------------------------	
	
This model file creates a simple understanding of how the table is implemented in your database.

The _controller.js_ should be a (relatively) generic implementation of the simple crud actions that can be applied to your database table. This file should implement the basic crud actions of the table itself, however their implementation can be handled in seperate places. For example, the boilerplate code here has three different functions available to its example table. They are outlined below:

	/**
	 * @function read
	 * Reads all elements from the database
	 * @returns {Object[]} data - An array of all elements stored in the table
	 */
	export const read
	
	/**
	 * @function readByID
	 * Reads one record from the database based on provided ID
	 * @param {string} ID
	 * @returns {Object} data - One record from the database defined by the passed ID
	 */
	export const readByID
	
	/**
	 * @function readByIDs
	 * Reads multiple record from the database based on provided IDs
	 * @param {string[]} IDS
	 * @returns {Object} data - Multiple records from the database based on the passed IDs
	 */
	export const readByIDs
	
These three functions handle the common read functions that a user would want to do against a table. However the implementation of these has not been done. Instead the inner workings of these controllers is handled by the _database/controller_ folder. For example an implementation of the read function for an actual project that had a table called _client_ is shown below:
	
	// database/tables/client/controller.js
	/**
	 * @function read
	 * Reads all elements from the database
	 * @returns {Object[]} data - An array of all elements stored in the table
	 */
	export const read = async () => {
	    const sheetData = await CONTROLLERS.GOOGLE_API.getClientsFromSpreadsheet();
	    return sheetData;
	}
	
	// database/tables/client/model.js
	// *******************************************
	// Implementation
	// -------------------------------------------
	const MODEL = {
	    id: "String",
	    name: "String",
	    email: ["String"],
	};
	export default MODEL;
	// --------------------------------
	
As you can tell, from these two simple functions we can clearly tell which is going to be returned by the read function of this table, however the requirements for actually getting all the clients from the google spreadsheet (where the data is stored in this case) requireds a bunch of different logic, that is not truely relevant to how our application functions.

This may seem like a lot of additional handling, however the key part comes in the next section:

#### Database/Views

The Database Views become the interface between our application and the tables containing our data. It is there our API calls that require data can hit to get applicatioon data from our different tables displayed in the way we want it. It provides a point in the application to manipulate the data to make it accessable to the front end if required, as well as a place to combine data from seperate tables into one structure as required.

Consider the views virtual tables that display the data in a more meaningful way to your application. For example consider the following implementation:

	// Example View Function Implementation
	export const getProfileDataOfActiveUsers = async () => {
	
	    // Get all user data from the back end
	    const users = await TABLES.USER.CONTROLLER.read();
	
	    // Remove all users who do not have their accounts turned on
	    const filteredUsers = users.filter((item) => {return item.active});
	
	    // Get the profile data for each user
	    const profileData = await TABLES.PROFILE.CONTROLLER.readByIDs(filteredUsers);
	
	    return profileData;
	}
	
The above outlines accessing two tables, and augmenting one based on the results of another. This example assumes we have a table of User data and a table of Profile data, and that we want to view the profile data of only users who have an active account. This information would not be possible to view directly from the profile view, but you could achieve something similar with a JOIN query using SQL. However you would need to JOIN the tables and then filter by active, so a slightly different way of achieving the same end result. 

## Deployment

Finally the deployment section handles all the application deploying to different environments. These ansible scripts have been setup to allow a project to be easily built and deployed to an EC2 AWS Instance.

### AWS EC2 Instructions

You will required an AWS account to complete the following instructions.

#### Creating Security Groups

You will need to create security groups for your instances. This can be done by going to the EC2 section in the AWS Console and, then navigating to the Network & Security tab and selecting _Security Groups_.

From here you will need to create two secutiry groups, an HTTP/HTTPS Access group (allow access on ports 80 & 443) and an SSH Access group (allow access on port 22). These rules should be Inbound rules.

#### Creating the EC2 Instance

Once your security groups have been created, you will be able to create your EC2 Instance. This project has been configured to use an **Ubuntu 16.04** instance, **ANY OTHER UBUNTU BUILD WILL FAIL**.

Follow the instance steps and choose your instance type (this will vary on your project, however most of the default settings and free tier setups will be fine for development) and then click run. Don't forget to add the security groups you created earlier.

Finnally, EC2 should prompt you to make a .pem key for sshing into the server, you will want to create a new keypair for this, name it something intelligent (like my-project-development.pem) and store it with your other local .pem files (I suggest ~/.ssh/my-project-development.pem).

#### Assigning an Elastic IP

Next, it is a good idea to create an Elastic IP. This way you will not have to constantly update your deployment scripts if the EC2 server crashes. This will also be imperative once you point a DNS to the instance, as you will not want to have to update your DNS settings each time your EC2 server restarts!

### Getting ready to Push Code to your EC2 instance

The following steps need to be complete to push your code to the EC2 Instance:

#### Setting up a GitHub SSH key for your codebase

To allow the EC2 server to coy over your project when you deploy the application, you will need to create an SSH deployment key for the repository. Creating an SSH key can be done with the following commands [see here for full instructions](https://developer.github.com/v3/guides/managing-deploy-keys/) or jump to [generating your ssh key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key):

Generating your SSH Key:

	ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

Save the file to a convieniant location, I suggest putting it inside a ~/.ssh folder on your drive:

	Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
	~/.ssh/my-github-deploy-key
	
This will create 2 files, the private key *my-github-deploy-key* and the public key *my-github-deploy-key.pub*. Firstly, rename the private key to *my-github-deploy-key.pem*. Then copy the contents of the public key, it should look something like this:

	cat ~/.ssh/my-github-deploy-key.pub
	ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCgOel+BjOZOio9yJXvu9fnQaoR5vNGiEA8nuZkqhWw81oKi576tqBPs577dm+ajnsdf8oi3n5lgkna6yS2lMptlxlHsGdziyUbLHv1Xc5oZafhi2Bdr8lcGxd9HW+qyYz8HPMPMonDlKAv58uow== your_email@example.com
	
Once you have this key, go to your Github repository, then to setting and then deploy keys and add a new public key. Add the line starting with *ssh-rsa* and set the permissions to read only (you will not need this key to be able to write to the repo for deploying) and you are done.

#### Updating Makefile Variables

Now, we need to go into the Makefile and update this so that that variables are all updated for the deployment scripts to work. These can be found at the very top of the Makefile in the root of this project. The variables that need to be updated can be found at the top of the Makefile and look like this:

	# ********************************************
	# Configuration Variables
	# ********************************************
	# The configuration variables located here are required
	# when completing deployments to AWS/EC2 server instances
	# The .pem keys relate to the ssh keys to get into each
	# instance, and the github keys require ssh access for them
	# to be downloaded directly to the EC2 instance from github.
	# -------------------------------
	appDevPrivatePemKey=appDev.pem
	appStagPrivatePemKey=appStag.pem
	appProdPrivatePemKey=appProd.pem
	githubRepo=application
	githubAccount=accountName
	githubDeploymentKey=githubPrivateDeployKey.pem
	# -------------------------------

Filling these variables out is relatively straight forward, however, .pem key files **MUST BE LOCATED IN YOUR ~/.ssh/ FOLDER OTHERWISE THIS MAKE FILE NEEDS TO BE RECONFIGURED**

#### Update inventory files with your Elastic IP Address

We need to tell ansible what server to connect to during the deployment process. This is done by what is a called an *inventory* file that contains an IP address to connect to. For our purposes, we will use the Elastic IP address that was associated with the EC2 Instance you created. It should look something like this:
	
	168.12.3.123
	
Once you have this IP address, add it to the corresponding server file. For exampls, if my Development EC2 server was located at the following IP address: 168.12.3.123. Then I would do the following:

Navigate to the development server inventory file:

	cd react-boiler/deploy/_dev/inventory
	
Then I would update my inventory file to look like this:

	# _dev/inventory
	[app_development]
	168.12.3.123
	
	[app_development:vars]
	ansible_python_interpreter=/usr/bin/python3
	
I could then update my staging or production inventory files with their corresponding Elastic IP addresses aswell.

#### Deployment Config

Once you have setup all teh above, you can start deploying your code! This make file is automatically configured to connect the development, staging and production envionments up to branches located in your github repository. 

The branches map with the following relationship:

	development -> development branch in github
	staging -> staging branch in github
	production -> master branch in github
	
If you go not have these branches setup in Github, you will need them for the dpeloyment scripts to run! Remember, the application is copied from Github -> the EC2 instance directly, so if you code has not been pushed to gtihub, it won't appear on your server!

*NOTE: Currently the deployment scripts for staging/production also require you to be on the master/staging branch when you run the deploy script. This is because the build of the front end doesn't always work on the EC2 instance (depending on the instance size) so it is easier and faster to do it locally, then just copy over the production version of the client side code. So remember:* 

**WHEN DEPLOYING TO STAGING OR PRODUCTIO ENSURE YOU ARE ON THE SAME BRANCH LOCALLY WHEN YOU DEPLOY OTHERWISE WEIRD THINGS WILL HAPPEN!**

#### Deploying for the first time

The first time you deploy, you will need to do one extra step, the "setting up the server" step. Thankfully this is pretty straightforward and all you need to do is run the following command (change development for your actual environment)

	make setup-development
	
Once that command is complete, you are ready to start deploying!

#### Deploying code

Now you can deploy with ease! To create a new build, firstly ensure you are on the correct branch (it should make the environment you want to deploy too). Then run the deployment command. For example to push to the development server, I would ensure I was on the development branch locally. Then run the following command:

	make deploy-development
	
Once that is done the app will be ready to run! Either use:

	make deploy-development-start

OR
	
	make deploy-development-restart
	
Depending on if the application is currently running on the server or not!



