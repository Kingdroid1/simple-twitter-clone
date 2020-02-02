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
* [MongDB](https://www.postgresql.org/) used for setting up relational database
* [Sequelize](https://sequelize.org//) a Node.js ORM for Postgres
* [Babel](https://babeljs.io/) used for transpiling codes from ES6 to ES5
* [Mocha](https://mochajs.org/) used for setting up tests
* [Chai](https://www.chaijs.com/) an assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [Docker](https://www.docker.com/) helps securely build, share and run modern applications anywhere
* [Redis](https://redis.io/) helps to cache data for a faster response rate

## Installations

### Getting started

* You need to have Git, Node, NPM and Docker installed on your computer.
* Installing [Node](node) automatically comes with npm.

### Clone

* Clone this project to your local machine `https://github.com/allebd/swapi.git`
  > Run the command below

```shell
   git clone https://github.com/allebd/swapi.git
```

### Setup

* Installing the project dependencies
  > Run the command below

```shell
   npm install
```

* Create a .env file similar to the .env.sample file

* Create your database
  > Run the command below

```shell
  npx sequelize db:create
```

* Add tables to database
  > Run the command below

```shell
  npm run db:ready
```

* Start your node server
  > Run the command below

```shell
  npm start
```

* Use `http://localhost:3000` as base url for endpoints

### Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS
| ------ | --------------------------------------- | -------------------------
| GET    | Listing the names of Star Wars movies   | `/api/v1/movies`
| GET    | Getting the character list for a movie  | `/api/v1/movie/:episodeId/characters`
| POST   | Adding anonymous comments for a movie   | `/api/v1/movie/:episodeId/comments`
| GET    | Listing anonymous comments for a movie  | `/api/v1/movie/:episodeId/comments`
| GET    | Get API Documentation                   | `/docs`

### Running Unit Test

* Run test for all endpoints
  > run the command below
  
```shell
  npm test
```

## Acknowledgements

* [Paystack](https://paystack.com/)

## Author

[Bella Oyedele](https://github.com/allebd)
