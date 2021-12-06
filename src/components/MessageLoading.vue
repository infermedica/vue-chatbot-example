<template>
  <div class="loader" :class="loaderModifier">
    <div class="point" />
    <div class="point" />
    <div class="point" />
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});
const loaderModifier = computed(() => props.loading || "loader--hidden");
</script>

<style lang="scss" scoped>
.loader {
  $transition: 150ms ease-in-out;

  background: #dedede;
  width: 52px;
  height: 26px;
  border-radius: 26px;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  align-items: center;
  justify-content: center;
  margin-left: auto;
  grid-gap: 6px;
  transition: opacity $transition, width $transition, height $transition;
  opacity: 1;
  overflow: hidden;

  &--hidden {
    opacity: 0;
    width: 0px;
    height: 0px;
  }
  .point {
    width: 8px;
    height: 8px;
    background: #c4c4c4;
    border-radius: 4px;
    animation: Jumping 550ms infinite;
  }
  .point:nth-child(1) {
    animation-delay: 83ms;
  }
  .point:nth-child(2) {
    animation-delay: 166ms;
  }
  .point:nth-child(3) {
    animation-delay: 83ms;
  }
}

@keyframes Jumping {
  0% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(-3px);
  }
}
</style>
