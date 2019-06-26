<template>
  <button class="date-picker__ceil"
          :class="{'date-picker__ceil_active': active}"
          @click="">
    {{date.getDate()}}
  </button>
</template>

<script>
  export default {
    name: "Ceil",
    props: {
      date: {
        type: Date,
        required: true,
      },
      active: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss">
  .date-picker {
    &__ceil {
      width: 100%;
      display: block;
      font-size: 1em;
      padding: .3em 0;
      margin: 0;
      background: transparent;
      border: 1px solid transparent;

      &:hover {
        border-color: cornflowerblue;
      }
      &_active, &:active {
        background: cornflowerblue;
      }
    }
  }
</style>