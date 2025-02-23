import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 5173,
    proxy:  {
      '/api': {
        target: 'https://salesmart-backend.onrender.com', 
        changeOrigin: true,
        secure: false,
      },
    }  
  },
}));

