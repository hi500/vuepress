module.exports = {
  title: "yuanwu VuePress blog",
  description: "my blog test",

  // theme: 'reco',
  themeConfig: {
    // 头部导航
    nav: [
      { text: "首页", link: "/" },
      {
        text: "yuanwu 的博客",
        items: [
          { text: "百度", link: "https://www.baidu.com" },
          { text: "谷歌", link: "https://www.google.com" },
        ],
      },
    ],
    // 左侧导航
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/demo/one",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/demo/one" },
          { title: "第二篇", path: "/demo/two" },
        ],
      },
    ],
  },

  base: "/vuepress/",
};
