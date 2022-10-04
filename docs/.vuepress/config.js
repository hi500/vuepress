module.exports = {
  title: "yuanwu VuePress blog",
  description: "my blog test",
  themeConfig: {
    logo: '/m.jpg',
  },

  // theme: 'reco',
  themeConfig: {
    // 头部导航
    nav: [
      { text: "首页", link: "/" },
      {
        text: "搜索引擎",
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
        // collapsable: false, // 是否折叠
        // children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/demo/", //该目录下的README.md文件
        collapsable: true,
        children: [
          { title: "第一篇", path: "/demo/one" }, //该目录下的one.md文件
          { title: "第二篇", path: "/demo/two" }, //该目录下的two.md文件
        ],
      },
      {
        title: "Vue",
        path: "/vue/",
        collapsable: false,
      },
      {
        title: "Nuxt.js",
        path: "/nuxtjs/",
        collapsable: false,
      },
    ],
  },

  base: "/vuepress/",
};
