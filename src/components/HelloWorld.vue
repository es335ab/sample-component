<template>
  <div class="hello">
    <h1>{{ message.text }}</h1>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Message } from "../types";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true
    }
  }
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
