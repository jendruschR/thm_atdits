<script setup>
import { ref } from "vue";
import ApiService from "@/service/apiService.js";

var message = ref("");

const handleClick = () => {
  console.log(message.value);
  ApiService.sendMessage(message.value);
};
</script>

<template>
  <div id="app">
    <div class="form">
      <el-input
        id="input"
        v-model="message"
        placeholder="Input you text here!"
      />
      <el-button id="button" type="primary" @click="handleClick"
        >Send</el-button
      >
    </div>
  </div>
</template>

<style scoped>
#app {
  padding-top: 6rem;
}
.form {
  margin-left: auto;
  margin-right: auto;
  width: 25%;
}

.form #input {
  margin-bottom: 1rem;
}

.form #button {
  margin-top: 0.2rem;
  float: right;
}
</style>
