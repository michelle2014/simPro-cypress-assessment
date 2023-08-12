const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      const browserify = require("@cypress/browserify-preprocessor");
      const options = {
        ...browserify.defaultOptions,
      };
      on("file:preprocessor", cucumber(options));
    },
    specPattern: "**/*.feature",
  },
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/report/report-[hash].xml",

    toConsole: true,
  },
});
