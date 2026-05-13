import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    exclude: ['**/node_modules/**', '**/e2e/**'],
  },
});
