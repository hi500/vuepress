module.exports = {
  title: "yuanwu VuePress blog",
  description: "my blog test",
  themeConfig: {
    logo: "/m.jpg",
  },
  markdown: {
    lineNumbers: true,
  },

  // theme: 'reco',
  themeConfig: {
    // 头部导航
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文章",
        items: [
          {
            text: "软技能",
            link: "/softskill/",
          },
          {
            text: "webgl",
            link: "/webgl/",
          },
        ],
      },
      {
        text: "搜索引擎",
        items: [
          { text: "百度", link: "https://www.baidu.com" },
          { text: "谷歌", link: "https://www.google.com" },
        ],
      },
    ],
    // 左侧导航
    /**
     * 按照目录配置 参考https://github.com/ggwork/vuepress-demo
    {
      "/softskill/": ["", "aaa1（aaa篇）", "bbb2（bbb篇）"],
      "/webgl/": ["", "1-aaa", "2-bbb"],
    }
     */
    sidebar: [
      {
        title: "首页",
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
        title: "vuex",
        path: "/vuex/",
        collapsable: false,
      },
      {
        title: "Nuxt.js",
        path: "/nuxtjs/",
        collapsable: false,
      },
    ],
  },

  sidebarDepth: 2,
  lastUpdated: "Last Updated",
  serviceWorker: {
    updatePopup: true,
  },

  base: "/vuepress/",
};
