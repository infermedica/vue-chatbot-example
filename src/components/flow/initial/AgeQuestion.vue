<template>
  <message-box>
    <div class="slider-widget">
      <label for="ageSlider">Enter your age: {{ inputValue }}</label>
      <div ref="slider" class="slider-wrapper">
        <input
          id="ageSlider"
          ref="input"
          v-model.number="inputValue"
          :disabled="disabled"
          class="input"
          :class="{ 'input--disabled': disabled }"
          type="range"
          :min="props.min"
          :max="props.max"
          @input="onSliderChange"
          @change="onSliderChange"
        />
        <div class="track" aria-hidden="true">
          <span ref="fill" class="fill" />
          <div ref="thumb" class="thumb">
            <div class="tooltip">
              <output
                class="tooltip__output"
                for="ageSlider"
                aria-hidden="true"
                >{{ inputValue }}</output
              >
            </div>
          </div>
        </div>
      </div>
      <message-button :disabled="disabled" @click="chooseAge()">
        Done
      </message-button>
    </div>
  </message-box>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import useApiStore from "@/stores/api.store";
import { useFlowStore } from "@/stores/flow.store";

const props = defineProps({
    min: {
      type: Number,
      default: 18,
    },
    max: {
      type: Number,
      default: 130,
    },
  }),
  flow = useFlowStore(),
  store = useApiStore();

const slider = ref(),
  thumb = ref(),
  fill = ref(),
  inputValue = ref(50),
  range = computed(() => props.max - props.min),
  disabled = ref(false);

const onSliderChange = () => {
  fill.value.style.width =
    ((inputValue.value - props.min) * 100) / range.value + "%";
  thumb.value.style.left =
    ((inputValue.value - props.min) * 100) / range.value + "%";
};

const chooseAge = async () => {
  store.apiState.age = inputValue.value;
  disabled.value = true;

  await flow.push(
    "PlainMessage",
    { type: "grey", message: inputValue.value },
    true
  );

  await flow.push("RiskfactorRegion");
};

onMounted(() => {
  onSliderChange;
});
</script>

<style scoped lang="scss">
$thumb-size: 6px;
$thumb-offset: -1.5px;

$output-margin: 7px;
$output-bottom: $thumb-size + $output-margin;

label {
  display: block;
  margin-bottom: 21px;
  font-size: 14px;
  color: $text-white;
}

.slider-wrapper {
  margin: 16px 0;
  max-width: 100%;
  position: relative;
  width: 100%;

  .track {
    background-color: $background;
    border-radius: 3px;
    height: 3px;
    position: relative;
    width: 100%;
  }

  .fill {
    background-color: $blue-dark;
    border-radius: 3px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
  }

  .thumb {
    background-color: $primary;
    border-radius: 50%;
    height: $thumb-size;
    width: $thumb-size;
    left: 50%;
    margin-left: $thumb-offset;
    position: absolute;
    top: $thumb-offset;
  }

  .tooltip {
    background-image: url("@/assets/images/svg/pin.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;
    height: 30px;
    position: absolute;
    bottom: $output-bottom;
    left: -150%;
    display: flex;
    justify-content: center;
    padding: 4px 5px 9px 5px;
    opacity: 0;
    transition: opacity 250ms;

    &__output {
      color: $primary;
      text-align: center;
      font-weight: 700;
      font-size: 12px;
    }
  }

  input[type="range"] {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .input[type="range"]:not(.input--disabled):hover + .track .tooltip,
  .input[type="range"]:not(.input--disabled):focus + .track .tooltip,
  .input[type="range"]:not(.input--disabled):active + .track .tooltip {
    opacity: 1;
  }

  // make default slider transparent
  // still needs to have user interactions
  input[type="range"]::-ms-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 100%;
    -moz-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }

  input[type="range"] {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: transparent;
    border: transparent;
  }

  input[type="range"]:focus {
    outline: none;
  }

  // thumb needs to be same size as custom thumb
  input[type="range"]::-ms-thumb {
    width: $thumb-size;
    height: $thumb-size;
    border-radius: 50%;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    width: $thumb-size;
    height: $thumb-size;
    border-radius: 50%;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb {
    width: $thumb-size;
    height: $thumb-size;
    border-radius: 50%;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    -webkit-appearance: none;
  }

  // microsoft IE10+ and Edge - eliminates default fills before and after thumb
  input[type="range"]::-ms-fill-lower {
    background: transparent;
    border: 0 none;
  }

  input[type="range"]::-ms-fill-upper {
    background: transparent;
    border: 0 none;
  }

  input[type="range"]::-ms-tooltip {
    display: none;
  }
}
</style>
