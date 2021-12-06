<template>
  <message-box>
    <div class="results">
      <h2 class="results__heading">Results</h2>
      <p class="results__paragraph">
        Please note that the list below may not be complete and is provided
        solely for informational purposes and is not a qualified medical
        opinion.
      </p>

      <ConditionPercentage
        v-for="(condition, index) in props.conditions"
        :key="index"
        class="results__condition"
        :percentage="condition.probability * 100"
        :name="condition.name"
      />
    </div>
  </message-box>
</template>

<script setup>
const props = defineProps({
  conditions: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.results {
  background-color: $primary;
  height: 100%;

  &__heading {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: $font-medium;
    line-height: $font-line-medium;
  }

  &__paragraph {
    font-size: $font-extra-small;
    line-height: $font-line-default;
    font-weight: 600;
    margin-bottom: 15px;
  }

  &__condition {
    margin-bottom: 17px;
  }

  &__condition:last-child {
    margin-bottom: 0;
  }
}
</style>
