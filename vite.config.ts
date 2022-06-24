import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  plugins: [vue()],
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        'a': resolve(root, 'styles', 'a.css'),
        'b': resolve(root, 'styles', 'b.css'),
        'index': resolve(root, 'index.html'),
      },
      output: {
        assetFileNames: "[name].[ext]",
      },
    }
  },
})
