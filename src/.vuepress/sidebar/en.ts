import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Overview",
      prefix: "getting-started/",
      link: "getting-started/",
      children: [
          "",
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
    {
      icon: "shell",
      text: "Contributing",
      prefix: "contributing/",
      link: "contributing/",
      children: [
        "",
      ],
    },
  ],

});
