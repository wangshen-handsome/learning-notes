import { defineConfig } from "vitepress";

import { dayList } from "./days";

//一阶段侧边栏数据
let firstItems: any[] = [];

//二阶段侧边栏数据
let secondItems: any[] = [];

//三阶段侧边栏数据
let thirdItems: any[] = [];

//四阶段侧边栏数据
let fourthItems: any[] = [];

//五阶段侧边栏数据
let fifthItems: any[] = [];

for (let attr in dayList) {
  if (firstItems.length < 18) {
    firstItems.push({
      text: dayList[attr],
      link: "/firstStage/firstStage" + attr,
    });
  }
  if (secondItems.length < 24) {
    secondItems.push({
      text: dayList[attr],
      link: "/secondStage/secondStage" + attr,
    });
  }
  if (thirdItems.length < 19) {
    thirdItems.push({
      text: dayList[attr],
      link: "/thirdStage/thirdStage" + attr,
    });
  }
  if (fourthItems.length < 26) {
    fourthItems.push({
      text: dayList[attr],
      link: "/fourthStage/fourthStage" + attr,
    });
  }
  if (fifthItems.length < 14) {
    fifthItems.push({
      text: dayList[attr],
      link: "/fifthStage/fifthStage" + attr,
    });
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习笔记",
  description: "学习笔记",
  base: "/learning-notes/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 右侧导航栏显示多级目录
    outline: "deep",
    lastUpdatedText: "最后更新",
    footer: {
      message: "欢迎来到帅小伙的学习笔记网",
    },
    // 导航栏
    nav: [
      { text: "一阶段", link: "/firstStage/firstStageone" },
      { text: "二阶段", link: "/secondStage/secondStageone" },
      { text: "三阶段", link: "/thirdStage/thirdStageone" },
      { text: "四阶段", link: "/fourthStage/fourthStageone" },
      { text: "五阶段", link: "/fifthStage/fifthStageone" },
    ],

    //侧边栏
    sidebar: {
      "/firstStage": [
        {
          text: "天数",
          items: firstItems,
        },
      ],
      "/secondStage": [
        {
          text: "天数",
          items: secondItems,
        },
      ],
      "/thirdStage": [
        {
          text: "天数",
          items: thirdItems,
        },
      ],
      "/fourthStage": [
        {
          text: "天数",
          items: fourthItems,
        },
      ],
      "/fifthStage": [
        {
          text: "天数",
          items: fifthItems,
        },
      ],
    },

    // 全站搜索
    // algolia: {
    //   appId: "ZLJ2S1PQNX",
    //   apiKey: "62903d3a481e5400265315490f01ddb9",
    //   indexName: "VitePress",
    // },
  },
  ignoreDeadLinks: true,
});
