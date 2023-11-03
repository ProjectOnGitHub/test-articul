<template>
  <button
    type="button"
    class="button"
    :class="className"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  @include defaultButton;
}
</style>
