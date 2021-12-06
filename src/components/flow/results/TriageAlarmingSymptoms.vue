<template>
  <message-box>
    <div class="alarming">
      <h2 class="alarming__heading">Alarming Symptoms</h2>
      <ul>
        <li v-for="(symptom, index) in props.symptoms" :key="index">
          {{ symptom.common_name }}
        </li>
      </ul>
    </div>
  </message-box>
</template>

<script setup>
const props = defineProps({
  symptoms: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.alarming {
  &__heading {
    font-weight: 600;
    font-size: $font-line-small;
    line-height: $font-line-medium;
    margin-bottom: 9px;
  }

  ul {
    list-style: disc inside;
    padding: 0;

    li {
      font-weight: normal;
      font-size: $font-extra-small;
      line-height: $font-extra-small;
      margin-bottom: 9px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
