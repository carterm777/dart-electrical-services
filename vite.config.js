import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // The shared kit ships JSX inside src/lib/motion.js, and esbuild does not
  // apply the JSX loader to .js by default. Scoped to src/ so nothing in
  // node_modules is re-parsed.
  // `exclude` defaults to /\.js$/ in Vite 5, which drops motion.js again — so
  // it has to be cleared explicitly for the include filter to take effect.
  esbuild: { include: /src[\/].*\.[jt]sx?$/, exclude: [], loader: 'jsx' },
  build: { outDir: 'dist', assetsInlineLimit: 2048, chunkSizeWarningLimit: 900 },
  server: { port: 5173, open: false },
})
