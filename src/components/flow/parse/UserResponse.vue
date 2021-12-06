<template>
  <message-box type="grey">
    {{ props.message }}
  </message-box>
</template>

<script setup>
import useApiStore from "@/stores/api.store";
import { useFlowStore } from "@/stores/flow.store";

const store = useApiStore(),
  flow = useFlowStore(),
  props = defineProps({
    message: {
      type: String,
      required: true,
    },
  });

flow.disable_input = true;

store.NLP(props.message);
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
</style>
