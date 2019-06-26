<template>
  <div id="app">
    <injector/>
    <button @click="show = !show">Test</button>
    <div>{{date}}</div>
  </div>
</template>

<script>

import Injector from "./lib/Injector";
export default {
  name: 'app',
  components: {Injector},
  data: ()=>({
    datePickerSize: 2,
    date: null,
    show: true,
    test: '11',
  }),
  methods: {
    onClick(e){
      console.log(e);
    }
  }
}
</script>

<style lang="scss">
</style>
