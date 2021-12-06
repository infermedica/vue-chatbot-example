<template>
  <message-box>
    Great! At first I need to know your sex. Choose one option:
    <div class="btn-container">
      <message-tile
        icon="/src/assets/images/svg/gender/female.svg"
        text="Female"
        :disabled="btnDisabled"
        @click="chooseSex('female')"
      />
      <message-tile
        icon="/src/assets/images/svg/gender/male.svg"
        text="Male"
        :disabled="btnDisabled"
        @click="chooseSex('male')"
      />
    </div>
  </message-box>
</template>

<script setup>
import { ref } from "vue";
import useApiStore from "@/stores/api.store";
import { useFlowStore } from "@/stores/flow.store";

const btnDisabled = ref(false),
  store = useApiStore(),
  flow = useFlowStore();

async function chooseSex(sex) {
  store.apiState.sex.value = sex;
  btnDisabled.value = true;

  await flow.push("PlainMessage", { type: "grey", message: sex }, true);

  await flow.push("AgeQuestion", {
    min: 18,
    max: 130,
  });
}
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 16px;
  margin-top: 16px;
  width: 100%;
}
</style>
