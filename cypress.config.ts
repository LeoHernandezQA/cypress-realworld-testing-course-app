import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'zqr7zz',
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
