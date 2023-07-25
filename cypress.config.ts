import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'zqr7zz',
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'http://a1aaa408818b145dbb82eacaa2d35368-588005589.sa-east-1.elb.amazonaws.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
