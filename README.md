# Cypress UI tests

Cypress is an End to End UI testing tool. See <https://www.cypress.io/> for more info.

## Setup your environment variables

- Create `.env` at the root, and `.env.uat` and `.env.dev` to be used for dev and uat environments repectively in `.env`.

## How to run cypress

Run `npm install` to install all dependencies.

## Headless

Run `npm run cy:run --headless` to hide the browser.

## Launch browser

Select Electron browser.

The Chrome browser is evergreen - meaning it will automatically update itself, sometimes causing a breaking change in your automated tests.

## UI - Test Runner

Run `npm run cy:open` to open cypress.

## Test Specs

Test spec files are stored in `cypress/integration` and are structured based on domains and are run in alphabetical order.
