<script setup>
import { ref } from "vue";
import ApiService from "@/service/apiService.js";

var message = ref("");
var greeting = ref("");

const handleClick = async () => {
  var response = await ApiService.sendMessage(message.value);
  console.log(response.data);
  greeting.value = response.data;
};
</script>

<template>
  <div id="app">
    <div class="form">
      <h2>Greet the world!</h2>
      <p>Send your text for our Backend to evaluate get a greeting returned!</p>
      <el-input
        id="input"
        v-model="message"
        placeholder="Input you text here!"
      />
      <el-tooltip
        placement="left"
        effect="dark"
        content="Please encase your input in quotation marks! Otherwise the backend will not be able to process it correctly!"
      >
        <el-button id="button" type="primary" @click="handleClick"
          >Send</el-button
        >
      </el-tooltip>
    </div>
    <div class="greeting">
      <h2>Backend greeting:</h2>
      <p>{{ greeting }}</p>
    </div>
  </div>
</template>

<style>
#app {
  padding-top: 6rem;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.form,
.greeting {
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

.greeting {
  margin-top: 5rem;
}
</style>
