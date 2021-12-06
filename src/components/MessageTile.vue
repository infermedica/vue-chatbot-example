<template>
  <button
    :disabled="disabled"
    class="tile"
    :class="{ 'tile--disabled': disabled }"
    @click="emitClick"
  >
    <img :src="icon" class="tile__icon" />
    <span class="tile__text">{{ text }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["click"]),
  emitClick = () => {
    emit("click");
  };
</script>

<style lang="scss" scoped>
.tile {
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid $white;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  background: $primary;
  transition: all 75ms ease-in-out;
  color: inherit;
  flex: 1;

  &__icon {
    margin-bottom: 7px;
  }

  &--disabled {
    filter: brightness(0.8);
    cursor: default;
  }

  &:not(.tile--disabled):hover,
  &:not(.tile--disabled):focus {
    transform: scale(1.03);
    background: $blue-very-light;
    outline: none;
  }
}
</style>
