<template>
  <div class="date-picker__container" @scroll.prevent="disableScroll">
    <transition-group tag="div"
                      :name="animation"
                      class="date-picker__container-items"
                      :style="{width: wrapperWidth + '%', marginLeft: -margin + '%', marginRight: -margin + '%'}">
      <div v-for="(n, i) in items + 2" :key="n + value" :style="{width: itemWidth + '%'}">
        <slot :offset="i + value - 1"/>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "List",
    props: {
      items: {
        type: Number,
        default: 1,
      },
      value: {
        type: Number,
        default: 0,
      }
    },
    data: () => ({
      animation: null,
    }),
    computed: {
      wrapperWidth() {
        return (this.items + 2) / this.items * 100;
      },
      margin() {
        return this.wrapperWidth / (this.items + 2);
      },
      itemWidth() {
        return 100 / (this.items + 2);
      },
    },
    watch: {
      value(value, old) {
        this.animation = (value > old) ? "slide-left" : "slide-right";
      }
    },
    methods: {
      disableScroll(e) {
        e.target.scrollTo(0, 0);
      }
    }
  }
</script>

<style lang="scss">
  .date-picker {
    &__container {
      position: relative;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;

      .slide-right-enter, .slide-right-leave-to, .slide-right-move,
      .slide-left-enter, .slide-left-leave-to, .slide-left-move{
        width: 0 !important;
      }
    }
    &__container-items{
      & > *{
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        transition: width .3s;
      }
    }
  }
</style>