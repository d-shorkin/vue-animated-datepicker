<template>
  <div class="date-picker__month">
    <div class="date-picker__title">{{month}} {{year}}</div>
    <table class="date-picker__table">
      <tbody>
      <tr v-for="(week, weekIndex) in lines" :key="week">
        <td v-for="(day, dayIndex) in 7" :key="weekIndex * 7 + dayIndex">
          <slot v-if="isActive(weekIndex, dayIndex)" :date="getDate(weekIndex, dayIndex)"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Month",
    props: {
      offset: {
        type: Number,
        default: 0
      },
      start: {
        type: Date,
        default: () => (new Date())
      }
    },
    computed: {
      startDay() {
        return new Date(this.firstDay.getFullYear(), this.firstDay.getMonth(), -((this.firstDay.getDay() || 7) - 2));
      },
      firstDay() {
        return new Date(this.start.getFullYear(), this.start.getMonth() + this.offset, 1);
      },
      lastDay(){
        return new Date(this.firstDay.getFullYear(), this.firstDay.getMonth() + 1, 0)
      },
      year() {
        return this.firstDay.getFullYear();
      },
      month() {
        return this.firstDay.getMonth() + 1;
      },
      lines() {
        let days = this.lastDay.getDate();
        return Math.ceil(((this.firstDay.getDay() || 7) - 1 + days) / 7);
      },
    },
    methods: {
      // todo: move to unit tests
      getDate(week, day) {
        let date = new Date(this.startDay.getTime());
        return new Date(date.setDate(date.getDate() + (week * 7 + day)));
      },
      isActive(week, day) {
        let time = this.getDate(week, day).getTime();
        return time >= this.firstDay.getTime() && time <= this.lastDay.getTime();
      }
    }
  }
</script>

<style lang="scss">
  .date-picker__table {
    width: 100%;
    border-collapse: collapse;

    td {
      padding: 0;
      margin: 0;
    }
  }
</style>