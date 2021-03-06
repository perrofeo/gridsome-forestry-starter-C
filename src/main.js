import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,700&display=swap'
  });
}
