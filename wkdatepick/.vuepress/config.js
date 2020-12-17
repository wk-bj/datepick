const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

const base = process.env.GH ? '/datepick/' : '/';

module.exports = {
  title: 'B 端拖拽日历组件',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.jpg` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'wk-bj/datepick',
    editLinks: true,
    lastUpdated: '上次更新', // string | boolean
    searchMaxSuggestions: 5,
    docsDir: 'wkdatepick',
    editLinkText: '公共组件！',
    sidebar: [
      '/',
      '/datepick/zh-cn',
    ]
  }
};
