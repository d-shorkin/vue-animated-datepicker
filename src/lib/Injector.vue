<template>
  <date-picker :items="items"/>
</template>

<script>
  import DatePicker from "./DatePicker";
  import List from "./components/List"
  import Item from "./components/Month"
  import Ceil from "./components/Ceil"

  export default {
    name: "Injector",
    components: {DatePicker},
    provide:{
      listView: List,
      itemView: Item,
      ceilView: Ceil,
    },
    data: ()=>({
      items: 1
    })
  }
</script>

<style lang="scss" scoped>

</style>