import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'build', // Specify the output directory
    rollupOptions: {
      output: {
        entryFileNames: 'my-app.js', // Specify the entry file name
        chunkFileNames: 'chunks/[name]-[hash].js', // Specify chunk file names
        assetFileNames: 'assets/[name]-[hash].[ext]', // Specify asset file names
      },
    },
  },
});
