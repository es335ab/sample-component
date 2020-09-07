import HelloWorld from "./components/HelloWorld.vue"
import { Message } from "./types";

// function plugin (Vue) {
//   Vue.component("hello-world", HelloWorld)
// }

// // Install by default if using the script tag
// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.use(plugin)
// }

// export default plugin

export {
  HelloWorld,
  Message
}
