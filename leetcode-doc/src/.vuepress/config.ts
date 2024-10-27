import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/leetcode/",

  lang: "zh-CN",
  title: "leetcode",
  description: "leetcode 记录",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
