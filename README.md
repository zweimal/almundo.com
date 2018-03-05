# AlMundo.com

AlMundo.com demo portal project. Created as an exercise.
This is a MEAN.JS full-stack project (with Angular 5 instead of Angular.js).
It uses Typescript for type-checking at both ends and Jasmine for testing (Karma and Protractor tools)

## Requirements
    - [NodeJS](https://nodejs.org) version 6.2+
    - [Yarn](https://yarnpkg.com) version 1.5.1+
    - [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1
    - [MongoDB](https://docs.mongodb.com/) version 3.6.2, including `mongoimport`

## Installation
    1. Clone it from from Github
    ```
    $ git clone git@github.com:zweimal/almundo.com.git
    ```
    2. Move to the new directory
    ```
    $ cd almundo.com
    ```
    3. Install dependencies
    ```
    $ yarn install
    ```
    4. Populate the database
    ```
    $ yarn db:seed
    ```

## Development server

Run `yarn start:dev` for dev front-end and back-end servers. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Back-end (API) server will run at `http://localhost:3000/`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Production

Run `yarn start` to build the project and start the production server at port 3000 (`http://localhost:3000/`).

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

