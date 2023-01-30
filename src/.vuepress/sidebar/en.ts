import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Getting started",
      prefix: "getting-started/",
      link: "getting-started/",
      children: [
          "overview",
          "using-commands"
      ],
    },
    {
      icon: "discover",
      text: "Github manager",
      prefix: "github-manager/",
      link: "github-manager/",
      children: [
          "info"
      ],
    },
  ],
});
