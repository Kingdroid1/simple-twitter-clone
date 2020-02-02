# simple-twitter-clone

## Table of Contents

* [Required Features](#required-features)
* [Postman Documentation](#postman-documentation)
* [Technologies Used](#technologies-used)
* [Acknowledgements](#acknowledgements)
* [Author](#author)

## Required Features

* User Singup
* User Signin(using JWT)
* Post tweet
* Reply to tweet
* Follow other users
* View own timeline
* Search(tweets and users)

Bonus:
* Unit testing(CI/CD)
* Real-time timeline update

## Postman Documentation

API Documentation was generated with [Postman](https://web.postman.co/collections/6586447-9847e4da-222e-4389-b2d2-49200628fdd1?version=latest&workspace=f7a65b8e-f637-4008-831e-98d3ba2a1d06).

## Technologies Used

* [Node-js](https://nodejs.org/en/) Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
* [MongDB](https://www.mongodb.com/) used for setting up NOSQL database
* [Mongoose](https://mongoosejs.com/docs/) a Node.js ORM for MongoDB
* [Babel](https://babeljs.io/) used for transpiling codes
* [Mocha](https://mochajs.org/) used for setting up tests
* [Chai](https://www.chaijs.com/) an assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [CircleCI](https://circleci.com/) helps securely automate development process with continuous integration and deployment (CICD) pipeline tool-chain quickly, safely, and at scale.

## Installations

### Getting started

* You need to have Git, Node, NPM and Docker installed on your computer.
* Installing [Node](node) automatically comes with npm.

### Clone

* Clone this project to your local machine `https://github.com/Kingdroid1/simple-twitter-clone.git`
  > Run the command below

```shell
   git clone https://github.com/Kingdroid1/simple-twitter-clone.git
```

### Setup

* Installing the project dependencies
  > Run the command below

```shell
   npm install
```

* Create a .env file

* Start your node server
  > Run the command below

```shell
  npm start
```

* Use `http://localhost:7003` as base url for endpoints

### Running Unit Test

* Run test for all endpoints
  > run the command below
  
```shell
  npm test
```

## Acknowledgements

* [SoftcomNG](https://softcom.ng/)

## Author

[Nicholas King](https://github.com/Kingdroid1)
