<template>
  <div class="header">
    <img src="@/assets/images/svg/logo.svg" class="header__logo" />
    <h2 class="header__name">InferBot</h2>
  </div>
</template>

<script></script>

<style lang="scss">
.header {
  z-index: 999999999;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 50%;
  width: 408px;
  padding: 10px 30px;
  transform: translateX(-50%);
  box-shadow: 0px 5px 6px -6px #00000c21;
  background-color: $background;

  &__logo {
    height: 32px;
  }

  &__name {
    font-weight: 600;
    color: $text;
    line-height: 1em;
  }
}
</style>
