<template>
  <form :class="inputClass" @submit.prevent="emitMessage">
    <input
      v-model="inputValue"
      placeholder="Type something"
      type="text"
      class="input__text-field"
      :disabled="disabled"
    />
    <button :disabled="disabled" class="input__button" type="submit" />
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
const emit = defineEmits(["message"]);
const props = defineProps({
  shown: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
});
const inputValue = ref("");

const inputClass = computed(() => {
  if (props.shown) return "input";
  return "input--hidden";
});

function emitMessage() {
  emit("message", inputValue.value);
  inputValue.value = "";
}
</script>

<style lang="scss" scoped>
.input {
  position: fixed;
  bottom: 0px;
  height: 74px;
  width: 408px;
  background-color: #fff;
  left: 50%;
  transform: translateX(-50%);
  padding: 19px 37px;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.16);
  z-index: 9999;
  display: flex;
  transition: all ease 250ms;

  &--hidden {
    transform: translateX(-50%) translateY(100%);
    @extend .input;
  }

  &__text-field {
    padding-left: 8px;
    border: none;
    border-bottom: 3px solid #3f94ff;
    height: 100%;
    width: 100%;
    outline: none;
  }

  &__text-field::placeholder {
    color: #cacaca;
  }

  &__button {
    position: absolute;
    right: 45px;
    top: 50%;
    transform: translateY(-50%);
    background-image: url("@/assets/message_button.svg");
    height: 20px;
    width: 16px;
    padding: 2px;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
  }
}
</style>
