<template>
  <MessageBox>
    <RiskfactorCheckbox
      v-model="selected"
      :risk-factors="riskFactors"
      @done="handleDone"
    />
  </MessageBox>
</template>

<script setup>
import { ref } from "vue";
import useApiStore from "@/stores/api.store";
import { useFlowStore } from "@/stores/flow.store";

const store = useApiStore(),
  flow = useFlowStore(),
  selected = ref([]),
  props = defineProps({
    riskFactors: {
      type: Array,
      default: () => [],
    },
  });

async function handleDone() {
  const evidence = store.apiState.evidence;
  if (selected.value.length) {
    store.apiState.evidence = [...evidence, ...selected.value];
  }
  await flow.push("Question", {});
}
</script>
