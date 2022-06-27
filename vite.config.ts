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
    manifest: true,
    rollupOptions: {
      input: [
        resolve(root, 'scripts', 'test.ts'),
        resolve(root, 'scripts', 'style-ab.ts'),
        resolve(root, 'scripts', 'style-abcd.ts'),
        resolve(root, 'styles', 'a.css'),
        resolve(root, 'styles', 'b.css'),
        resolve(root, 'index.html'),
      ]
    }
  },
})
