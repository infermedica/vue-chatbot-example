<template>
  <message-box>
    Sorry, I didn't get that. Please write your symptom in a diffrent way.
  </message-box>
</template>

<script setup>
import { watch } from "vue";
import { useFlowStore } from "@/stores/flow.store";

const flow = useFlowStore();

flow.show_input = true;
flow.disable_input = false;
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
</style>
