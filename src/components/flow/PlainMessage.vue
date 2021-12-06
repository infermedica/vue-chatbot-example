<template>
  <message-box :type="props.type">
    {{ message }}
  </message-box>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "primary",
  },
});
</script>
