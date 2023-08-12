# Cypress UI tests

Cypress is an End to End UI testing tool. See <https://www.cypress.io/> for more info.

## Setup your environment variables

- Create `.env` at the root, and `.env.uat` and `.env.dev` to be used for dev and uat environments repectively in `.env`. (This step is not really needed, but in real world app, it's necessary.)

## Before using cypress

Run `npm install` to install all dependencies.

## How to run cypress

Run `npm run cy:run` to run the test without opening a brownser.

## Launch browser

Select Electron browser.

The Chrome browser is evergreen - meaning it will automatically update itself, sometimes causing a breaking change in your automated tests.

## UI - Test Runner

Run `npm run cy:open` to open cypress.

## Test Specs

Test spec files are stored in `cypress/integration` and are structured based on features.

## Dependencies

Use cypress-cucumber-preprocessor <https://github.com/TheBrainFamily/cypress-cucumber-example> to work with cucumber, the latest is @badeball/cypress-cucumber-preprocessor <https://github.com/badeball/cypress-cucumber-preprocessor>, but the configuration in cypress.config.js uses type notation, so choose the older one to work with javascript.

## BDD or TDD

BDD is chosen because BDD bridges the gap between business stakeholders and the technical team through a common platform. Hence, communication among the team becomes more transparent.

Cucumber is a software tool that supports behavior-driven development (BDD).

Gherkin is being used as the language in which the test cases are written in a simple format and can also be read and modified by a non-technical user.
