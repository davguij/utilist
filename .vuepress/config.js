const apiSideBar = require('./api-sidebar.json');

module.exports = {
  base: '/utilist/', // for deploying the docs to GH Pages
  title: 'utilist',
  description: 'A modern utility library for JavaScript and TypeScript.',
  themeConfig: {
    sidebar: [...apiSideBar],
  },
};
