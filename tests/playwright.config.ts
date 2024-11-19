import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 15000,
  testDir: './features',
  use: {
    headless: true,
    actionTimeout: 15000
  },
});
