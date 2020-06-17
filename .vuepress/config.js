const apiSideBar = require('./api-sidebar.json');

module.exports = {
  base: '/tsdash/', // for deploying the docs to GH Pages
  title: 'tsdash',
  description: 'A modern utility library for JavaScript and TypeScript.',
  themeConfig: {
    sidebar: [...apiSideBar],
  },
};
