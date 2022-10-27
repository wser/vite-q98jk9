import { SimpleSearch } from 'vitepress-plugin-simple-search';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [SimpleSearch(), VitePWA({ registerType: 'autoUpdate' })],
});
