import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  testMatch: '**/*.e2e.ts',
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4323',
    port: 4323,
    reuseExistingServer: false,
  },
  use: {
    baseURL: 'http://127.0.0.1:4323',
  },
});
