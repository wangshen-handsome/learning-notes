import { defineConfig } from "vitepress";

import { dayList } from "./days";

const BASE_URL = "/learning-notes/" as const;

const withBase = (path: string): string =>
  `${BASE_URL}${path}`.replace(/\/+/g, "/");

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
  head: [["link", { rel: "icon", href: withBase("/logo.svg") }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 右侧导航栏显示多级目录
    logo: "/logo.svg",
    outline: "deep",
    // 导航栏
    nav: [
      { text: "一阶段", link: "/firstStage/firstStageone" },
      { text: "二阶段", link: "/secondStage/secondStageone" },
      { text: "三阶段", link: "/thirdStage/thirdStageone" },
      { text: "四阶段", link: "/fourthStage/fourthStageone" },
      { text: "五阶段", link: "/fifthStage/fifthStageone" },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1684897554350" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1541" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1542"></path></svg>',
        },
        link: "https://gitee.com/wang-shen91201/learning-notes",
      },
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
  },
  ignoreDeadLinks: true,
});
