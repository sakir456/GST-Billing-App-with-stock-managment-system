import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: mode === 'development' ? {
      '/api': {
        target: 'http://localhost:6000', // Local backend URL in development
        changeOrigin: true,
        secure: false,
      },
    } : undefined, // No proxy in production
  },
}));

// "/api": {
//       //   target: "http://localhost:6000",
//       //   changeOrigin: true,  // This helps with CORS issues
//       //   secure: false,   
//       // }