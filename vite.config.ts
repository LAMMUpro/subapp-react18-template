import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 1323,
    host: '0.0.0.0',
    cors: true,
  },
});
