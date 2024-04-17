const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    viewportHeight: 960,
    viewportWidth: 1538,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: true,
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    browsers: [
      {
        name: 'chrome',

        family: 'chromium',

        channel: 'stable',

        displayName: 'Chrome',

        version: '123.0.6312.107',

        path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',

        minSupportedVersion: 64,

        majorVersion: '123',

      },
      {
        name: 'firefox',

        family: 'firefox',

        channel: 'stable',

        displayName: 'Firefox',

        version: '124.0.2',

        path: '/Applications/Firefox.app/Contents/MacOS/firefox',

        minSupportedVersion: 86,

        majorVersion: '124',

      },
      {
        name: 'electron',

        channel: 'stable',

        family: 'chromium',

        displayName: 'Electron',

        version: '118.0.5993.159',

        path: '',

        majorVersion: 118,

      },
      {
        name: 'Brave',

        channel: 'stable',

        family: 'chromium',

        displayName: 'Brave',

        version: '123.0.6312.105',

        path: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', 

        majorVersion:'',

      },
    ],
    experimentalWebKitSupport: true
  },
});
