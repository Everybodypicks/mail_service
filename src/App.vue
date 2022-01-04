<template>

  <div id="app">
   <milesender msg="Hello"></milesender>
  </div>
</template>

<script>

import Milesender from "@/components/milesender";
export default {
  name: 'App',
  components: {
    Milesender
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
