import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/dinostudio/',
  plugins: [react(), tailwindcss()],
});
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR dinonaktifkan di AI Studio jika DISABLE_HMR=true
      hmr: process.env.DISABLE_HMR !== 'true',
      watch:
        process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
