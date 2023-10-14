import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalTimeout: 60000,
  retries: 1,
  reporter: 'html',
  fullyParallel: true,

  use: {
    navigationTimeout: 3000,
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
