![image](https://github.com/user-attachments/assets/2327e1a9-cbe2-499a-9e5d-ce69357056e0)

![image](https://github.com/user-attachments/assets/a73dd468-c101-469e-a991-3e80c775ef44)


# Solar System NodeJS Application

A simple HTML+MongoDB+NodeJS project to display Solar System and it's planets..

---
# MongoDB Setup
I am using mongodb:6 container and i have seed the application data in it.

* MongoDB Test DB image
saadzahid/solarsystem-mongodb-test:01

* MongoDB Deployment Image
saadzahid/solarsystem-mongodb:01

I have make the credentials for test db publically in cicd so anyone can test and use it.

## Requirements

For development, you will only need Node.js and NPM installed in your environement.
node version: 18

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

  ### Download and install nvm:
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

  ### in lieu of restarting the shell
  \. "$HOME/.nvm/nvm.sh"

  ### Download and install Node.js:
  nvm install 18

  ### Verify the Node.js version:
  node -v # Should print "v18.20.8".
  nvm current # Should print "v18.20.8".

  ### Verify npm version:
  npm -v # Should print "10.8.2".

  ### If you have multiple node versions then install and use 18 version
  nvm install 18
  nvm use 18
  node -v

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

---
## Install Dependencies from `package.json`
    $ npm install

## Run Unit Testing
    $ npm test

## Run Code Coverage
    $ npm run coverage

## Run Application
    $ npm start

## Access Application on Browser
    http://localhost:3000/

# Setup
* Setup the Deployment DB
docker container run -d --name mongodb   -p 27017:27017   -e MONGO_INITDB_ROOT_USERNAME=admin   -e MONGO_INITDB_ROOT_PASSWORD=secret  saadzahid/solarsystem-mongodb:01

* Setup MONGO_URI for deployment DB
vim ~/.bashrc

### Setup MONGO_URI as environment variable in ~/.bashrc
export MONGO_URI=mongodb://superuser:SuperPassword@192.168.100.47:27017/solar_system
source ~/.bashrc

* Test Application Locally
npm instal
npm test
npm run coverage
node seed.js
npm start 

* Now run Gitlab CICD and access the application on the mentioned $INGRESS_URL in the cicd output

* Set Variable Values in GitHub secrets OR GitLab CICD Variables
DEV_KUBE_CONFIG="Your k8s cluster config ~/.kube/config"
DOCKER_PASSWORD="DockerHub Password"
DOCKER_USERNAME="DockerHub_Username"
NAMESPACE="Your name space in k8s cluster where you will deploy application"
REPLICAS="Amount of Replicas you wanna create i used 2 for this project"

## Deploy Application with GitLab Auto-DevOps Feature
[Deploy NodeJS Application using GitLab Auto-DevOps CICD](https://github.com/abdulsaad209/Auto-DevOps-NodeJS-Application-Gitlab)
