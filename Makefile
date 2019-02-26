# ********************************************
# React Boiler Makefile
# ********************************************
# This makefile contains all the required scripts
# to run, build and deploy a development, staging and production
# version of the application.
# -------------------------------

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


# ********************************************
# Special Make Commands For Project
# ********************************************

# ********************************************
# Copy Current Branch To A New Folder (Eg Dupe Project)
# make dupe-project dest=../some/file/path
# -------------------------------
dupe-project:
	test $(dest)
	rsync -avz --exclude ".git" --exclude "node_modules" . $(dest)

# -------------------------------

# ============================================
# Application Commands
# ============================================

# development
# Run this command to start the client in development mode and
# the server in development-local mode
development:
	npm start

# development-remote
# Run this command to start the application as development on a remote server
development-remote:
	npm run start-development

# staging-local
# Run this command to start the local version of the staging application
staging-local:
	npm run start-staging-local

# production-local
# Run this command to start a local version of the production application
production-local:
	npm run start-production-local
# -------------------------------

# ********************************************
# Front End Deployment Only
# -------------------------------

# -------------------------------
# Firebase deploy
# -------------------------------
deploy-firebase:
	cd ./client
	npm run build
	firebase deploy

# -------------------------------
# Heroku deploy
# -------------------------------
deploy-heroku:
	cd ./client
	npm run build
	heroku deploy
# -------------------------------


# ============================================
# AWS/EC2 Deployment Scripts
# ============================================
# REMEMBER! When you are deploying to EC2 you must be currently
# on the same branch that you wish to deploy too. This is because
# the EC2 instances do not always have enough memory to build the
# production build of the client folder, so this is done locally
# and then copied over to the EC2 instance as part of the ansible
# script.
#
# Don't forget to add the ip addresses of each EC2 instance to the
# corresponding inventory file before beginning your deployments.
# -------------------------------

# -------------------------------
# Development Deployment
# -------------------------------
# All deployments from the 'development' branch
# -------------------------------
setup-development:
	ansible-playbook -i ./deploy/_dev/inventory --private-key=~/.ssh/${appDevPrivatePemKey} ./deploy/server_setup.yml --verbose --extra-vars "gitBranch=development githubRepo='${githubRepo}' githubAccount='${githubAccount}' githubDeploymentKey='${githubDeploymentKey}'"

deploy-development:
	ansible-playbook -i ./deploy/_dev/inventory --private-key=~/.ssh/${appDevPrivatePemKey} --extra-vars "gitBranch='development' githubRepo='${githubRepo}' githubAccount='${githubAccount}' githubDeploymentKey='${githubDeploymentKey}'" ./deploy/deploy_app.yml --verbose --tags="development"

deploy-development-start:
	ansible-playbook -i ./deploy/_dev/inventory --private-key=~/.ssh/$(appDevPrivatePemKey) --extra-vars appEnv="development" ./deploy/run_commands.yml --verbose --tags="npm_start_development"

deploy-development-stop:
	ansible-playbook -i ./deploy/_dev/inventory --private-key=~/.ssh/$(appDevPrivatePemKey) --extra-vars appEnv="development" ./deploy/run_commands.yml --verbose --tags="npm_stop_development"

deploy-development-restart:
	ansible-playbook -i ./deploy/_dev/inventory --private-key=~/.ssh/$(appDevPrivatePemKey) --extra-vars appEnv="development" ./deploy/run_commands.yml --verbose --tags="npm_restart_development"
# -------------------------------

# -------------------------------
# Staging Deployment
# -------------------------------
# All deployments from the 'staging' branch
# -------------------------------
setup-staging:
	ansible-playbook -i ./deploy/_stag/inventory --private-key=~/.ssh/${appStagPrivatePemKey} ./deploy/server_setup.yml --verbose --extra-vars "gitBranch=staging githubRepo='${githubRepo}' githubAccount='${githubAccount}' githubDeploymentKey='${githubDeploymentKey}'"

deploy-staging:
	npm run build-client-staging
	ansible-playbook -i ./deploy/_stag/inventory --private-key=~/.ssh/${appStagPrivatePemKey} --extra-vars "gitBranch='staging' githubRepo='${githubRepo}' githubAccount='${githubAccount}' githubDeploymentKey='${githubDeploymentKey}'" ./deploy/deploy_app.yml --verbose --tags="staging"

deploy-staging-start:
	ansible-playbook -i ./deploy/_stag/inventory --private-key=~/.ssh/${appStagPrivatePemKey} --extra-vars appEnv="staging" ./deploy/run_commands.yml --verbose --tags="npm_start_staging"

deploy-staging-stop:
	ansible-playbook -i ./deploy/_stag/inventory --private-key=~/.ssh/${appStagPrivatePemKey} --extra-vars appEnv="staging" ./deploy/run_commands.yml --verbose --tags="npm_stop_staging"

deploy-staging-restart:
	ansible-playbook -i ./deploy/_stag/inventory --private-key=~/.ssh/${appStagPrivatePemKey} --extra-vars appEnv="staging" ./deploy/run_commands.yml --verbose --tags="npm_restart_staging"
# -------------------------------

# -------------------------------
# Production Deployment
# -------------------------------
# All deployments from the 'master' branch
# -------------------------------
setup-production:
	ansible-playbook -i ./deploy/_prod/inventory --private-key=~/.ssh/${appProdPrivatePemKey} ./deploy/server_setup.yml --verbose --extra-vars "gitBranch=master githubRepo='${githubRepo}' githubAccount='${githubAccount}' githubDeploymentKey='${githubDeploymentKey}'"

deploy-production:
	npm run build-client-production
	ansible-playbook -i ./deploy/_prod/inventory --private-key=~/.ssh/${appProdPrivatePemKey} --extra-vars "gitBranch='master' githubRepo='${githubRepo}' githubAccount='${githubAccount}' githubDeploymentKey='${githubDeploymentKey}'" ./deploy/deploy_app.yml --verbose --tags="production"

deploy-production-start:
	ansible-playbook -i ./deploy/_prod/inventory --private-key=~/.ssh/${appProdPrivatePemKey} --extra-vars appEnv="production" ./deploy/run_commands.yml --verbose --tags="npm_start_production"

deploy-production-stop:
	ansible-playbook -i ./deploy/_prod/inventory --private-key=~/.ssh/${appProdPrivatePemKey} --extra-vars appEnv="production" ./deploy/run_commands.yml --verbose --tags="npm_stop_production"

deploy-production-restart:
	ansible-playbook -i ./deploy/_prod/inventory --private-key=~/.ssh/${appProdPrivatePemKey} --extra-vars appEnv="production" ./deploy/run_commands.yml --verbose --tags="npm_restart_production"

# -------------------------------
# ********************************************
