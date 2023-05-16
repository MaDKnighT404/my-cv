import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Main': path.resolve(__dirname, './src/components/Main/'),
      '@Header': path.resolve(__dirname, './src/components/Header/'),
      '@Footer': path.resolve(__dirname, './src/components/Footer/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
    },
  },
});
