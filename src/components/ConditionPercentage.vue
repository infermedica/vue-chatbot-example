<template>
  <div class="display">
    <div class="display__name">{{ name }}</div>
    <progress class="display__bar" max="100" :value="percentage"></progress>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: "{{default string}}",
  },
  percentage: {
    type: String,
    default: "23",
  },
});
</script>

<style lang="scss" scoped>
.display {
  background-color: #fff;
  padding: 15px;
  border-radius: 3px;
  color: $text;

  &__name {
    font-size: $font-extra-small;
    line-height: $font-line-default;
    font-weight: 600;
  }

  &__bar {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 9px;

    &::-webkit-progress-bar {
      background-color: $light-grey;
      border-radius: 9px;
    }

    &::-webkit-progress-value {
      background-color: $blue-very-light;
      border-radius: 9px;
    }
  }
}
</style>
