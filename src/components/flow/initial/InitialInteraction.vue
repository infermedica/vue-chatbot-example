<template>
  <message-box>
    I'm based on Infermedica API. You can read more about that
    <a href="https:developer.infermedica.com"> Here</a>
    <div style="margin-top: 16px">
      <message-button :disabled="btnDisabled" @click="next">
        Let's go!
      </message-button>
    </div>
  </message-box>
</template>

<script setup>
import { ref } from "vue";
import { useFlowStore } from "@/stores/flow.store";
const btnDisabled = ref(false),
  flow = useFlowStore();

const next = async () => {
  btnDisabled.value = true;
  await flow.push("PlainMessage", { type: "grey", message: "Let's go!" }, true);
  await flow.push("GenderQuestion");
};
</script>
