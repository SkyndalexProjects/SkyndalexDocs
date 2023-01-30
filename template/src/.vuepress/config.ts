import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs",
      description: "Docs for skyndalex bot",
    },
  },

  theme,

  shouldPrefetch: false,
});
