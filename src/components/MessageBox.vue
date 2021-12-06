<template>
  <div class="message" :class="getClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});
const getClass = computed(() => "message--" + props.type);
</script>

<style lang="scss" scoped>
.message {
  position: relative;
  border-radius: 5px;
  font-size: 14px;
  padding: 20px;
  animation: init 400ms forwards;

  &--primary {
    background: $primary;
    color: $white;
  }

  &--danger {
    background: $danger;
    color: $white;
  }

  &--danger-light {
    background: $danger-light;
    color: $white;
  }

  &--warning {
    background: $warning;
    color: $white;
  }

  &--success-light {
    background: $success-light;
    color: $white;
  }

  &--success {
    background: $success;
    color: $white;
  }

  &--grey {
    background: $grey-extreme-light;
    color: $text;
  }
}

@keyframes init {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
