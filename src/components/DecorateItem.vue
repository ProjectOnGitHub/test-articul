<template>
  <span
    class="decorate-item"
    :class="modifier"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    modifier: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.decorate-item {
  @include flexible(max-content);
  font-family: $font-family-heading;
  color: $color-text;
  box-sizing: border-box;
  line-height: 2.91;
  letter-spacing: 0.045rem;
  border-radius: 88px;
  text-transform: uppercase;
  border: 3px solid $color-decorate;
  background-color: $color-background;

  &_feature {
    font-size: $font-size-decorate-l;
    padding: 0 $font-size-decorate-l;
  }
}
</style>
