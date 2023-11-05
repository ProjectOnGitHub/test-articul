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
  display: inline-block;
  box-sizing: border-box;
  font-size: $font-size-decorate-l;
  line-height: 2.91;
  font-family: $font-family-heading;
  color: $color-text;
  text-transform: uppercase;
  letter-spacing: 0.045rem;
  white-space: nowrap;
  background-color: $color-background;
  border: 3px solid $color-decorate;
  border-radius: 88px;

  &_feature {
    padding: 25px 0;
    transform: rotate(-180deg);
    transform-origin: end;
    writing-mode: vertical-lr;

    @media screen and (max-width: $desktop-xxl) {
      font-size: $font-size-decorate-m;
    }

    @media screen and (max-width: $tablet-s) {
      padding-top: 12px;
      padding-bottom: 12px;
      font-size: $font-size-decorate-xs;
      border-width: 2px;
    }
  }

  &_arrow {
    padding: 0 25px;

    @media screen and (max-width: $desktop-xl) {
      font-size: $font-size-decorate-xl;
    }

    @media screen and (max-width: $tablet-xm) {
      padding: 0 25px;
      font-size: $font-size-decorate-m;
    }

    @media screen and (max-width: $smartphone) {
      padding: 0 12px;
      font-size: $font-size-decorate-s;
    }
  }
}
</style>
