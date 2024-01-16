const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 320000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    URL: 'https://www.phptravels.net'
  }

  
});
