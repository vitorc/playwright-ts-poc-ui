import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  fullyParallel: true,
  expect: {
    timeout: 5000
  },
  use:{
          headless: true,
          browserName: 'chromium',
          baseURL: 'https://www.saucedemo.com/',
          screenshot: 'only-on-failure',
          trace:'on'
        },
};
export default config;
