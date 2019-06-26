<template>
  <div class="date-picker">
    <component :is="listView" v-model="offset" :items="items">
      <template v-slot="{offset}">
        <component :is="itemView" :offset="offset">
          <template v-slot="{date}">
            <component :is="ceilView" :date="date" @click="$emit('input', date)"/>
          </template>
        </component>
      </template>
    </component>
    <controls @prev="offset--" @next="offset++">
      <template #prev>
        <slot name="prev"/>
      </template>
      <template #next>
        <slot name="next"/>
      </template>
    </controls>
  </div>
</template>
<script>
  import './styles.scss'
  import Controls from "./components/Controls";

  export default {
    name: "DatePicker",
    components: {Controls},
    inject: {
      listView: {},
      itemView: {},
      ceilView: {}
    },
    props: {
      items: {
        type: Number,
        default: 1
      },
      value: {},
    },
    data: ()=>({
      offset: 0
    })
  }
</script>
<style>
  .date-picker {
    overflow: hidden;
    position: relative;
  }
</style>
