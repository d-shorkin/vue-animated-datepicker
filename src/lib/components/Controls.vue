<template>
  <div class="date-picker__controls">
    <button class="date-picker__control" @click="$emit('prev')">
      <slot name="prev">&lt;</slot>
    </button>
    <button class="date-picker__control" @click="$emit('next')">
      <slot name="next">&gt;</slot>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Controls",
  }
</script>

<style lang="scss" scoped>
  .date-picker__controls{
    position: absolute;
    width: 100%;
    top: 0;
  }
</style>