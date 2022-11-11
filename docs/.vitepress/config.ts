import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  base: '/vitepress-customized/',
  themeConfig: {
    siteTitle: 'Free static site',

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    nav: [
      { text: 'Example', link: '/example' },

      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },

      // ...
    ],

    sidebar: [
      {
        text: 'Menu',
        collapsible: true,
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],
  },
});
