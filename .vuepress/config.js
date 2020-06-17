const apiSideBar = require('./api-sidebar.json');

module.exports = {
  title: 'tsdash',
  description: 'A modern utility library for JavaScript and TypeScript.',
  themeConfig: {
    sidebar: [...apiSideBar],
  },
};
