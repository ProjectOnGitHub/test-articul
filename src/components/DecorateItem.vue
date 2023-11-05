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
  font-family: $font-family-heading;
  color: $color-text;
  box-sizing: border-box;
  line-height: 2.91;
  letter-spacing: 0.045rem;
  border-radius: 88px;
  text-transform: uppercase;
  border: 3px solid $color-decorate;
  background-color: $color-background;
  font-size: $font-size-decorate-l;
  white-space: nowrap;

  &_feature {
    writing-mode: vertical-lr;
    transform-origin: end;
    transform: rotate(-180deg);
    padding: 25px 0;

    @media screen and (max-width: $desktop-xxl) {
      font-size: $font-size-decorate-m;
    }

    @media screen and (max-width: $tablet-s) {
      font-size: $font-size-decorate-xs;
      padding-top: 12px;
      padding-bottom: 12px;
      border-width: 2px;
    }
  }

  &_arrow {
    padding: 0 25px;

    @media screen and (max-width: $desktop-xl) {
      font-size: $font-size-decorate-xl;
    }

    @media screen and (max-width: $tablet-xm) {
      font-size: $font-size-decorate-m;
      padding: 0 25px;
    }

    @media screen and (max-width: $smartphone) {
      font-size: $font-size-decorate-s;
      padding: 0 12px;
    }
  }
}
</style>
