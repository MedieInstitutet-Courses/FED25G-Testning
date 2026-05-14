import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: ['**/node_modules/**', '**/e2e/**'],
    projects: [
      {
        extends: true,
        test: {
          exclude: ['**/*.browser.{test,spec}.ts(x)'],
          name: 'Unit',
          environment: 'node'
        }
      },
      {
        extends: true,
        test: {
          include: ['**/*.browser.{test,spec}.ts(x)'],
          name: 'Browser',
          browser: {
            enabled: true,
            headless: false,
            provider: playwright(),
            instances: [
              { browser: 'chromium' },
            ],
          },
        }
      }
    ],
  },
});
