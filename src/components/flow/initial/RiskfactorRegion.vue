<template>
  <MessageBox>
    <RegionComponent v-model="visitedRegions" @done="handleFinish" />
  </MessageBox>
</template>

<script setup>
import { ref } from "vue";
import useApiStore from "@/stores/api.store";
import { useFlowStore } from "@/stores/flow.store";

const visitedRegions = ref([]),
  flow = useFlowStore(),
  store = useApiStore();

async function handleFinish() {
  const visitedRegMapped = visitedRegions.value
    .map(({ id, choice_id, source }) => {
      return {
        id,
        choice_id,
        source,
      };
    })
    .filter((x) => x);

  if (visitedRegMapped.length) {
    store.apiState.evidence = [...store.apiState.evidence, ...visitedRegMapped];
  }

  let riskFactors;
  await store
    .getRiskFactors()
    .then((response) => response.json())
    .then((json) => (riskFactors = json));

  await flow.push("RiskfactorSuggestions", {
    riskFactors: riskFactors,
  });
}
</script>
