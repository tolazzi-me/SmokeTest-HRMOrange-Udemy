const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome', // Define o mochawesome como repórter
    reporterOptions: {
      reportDir: 'cypress/reports', // Diretório onde os relatórios serão salvos
      overwrite: false,
      html: false,
      json: true
    }
  },
});
