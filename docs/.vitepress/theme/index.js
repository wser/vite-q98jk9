// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import Search from '../../components/Search.vue';
import MyLayout from './MyLayout.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('Search', Search);
  },
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout,
};
