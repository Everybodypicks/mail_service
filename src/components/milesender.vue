<template>
  <div>
    <div class="input">
      <el-input id="url" v-model="url" placeholder="请输入地址" style="text-align:center;width: 200px"></el-input>
      <el-input id="password" v-model="text" placeholder="请输入内容" style="text-align:center;width: 200px"></el-input>
      <el-button @click="send">提交</el-button>
    </div>


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "milesender",
  data(){
    return{
      url:'',
      text:''
    }
  },
  methods:{
    send(){
      axios({
        method: 'post',
        url: "http://127.0.0.1:8081/test/sendOne",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: {
          url: this.url,
          text: this.text
        },
      })
      console.log(this.text)
    }
  }
}
</script>

<style scoped>

</style>