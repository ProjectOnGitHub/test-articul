<template>
  <ul class="features">
    <li
      v-for="(item, index) in featuresInfo"
      :key="index"
      class="feature"
    >
      <decorate-item modifier="decorate-item_feature">
        {{ item }}
      </decorate-item>
    </li>
  </ul>
</template>

<script>
import DecorateItem from './DecorateItem.vue';

export default {
  name: 'TheFeatures',
  components: { DecorateItem },

  props: {
    featuresInfo: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.features {
  grid-area: features;
  @include unmarkedList;
  @include gridable(max-content);
  gap: 16px;
  grid-template-columns: repeat(5, max-content);
  align-items: end;
  justify-self: end;

  @media screen and (max-width: $desktop-xxl) {
    gap: 12px;
  }

  @media screen and (max-width: $desktop-l) {
    justify-self: center;
  }

  @media screen and (max-width: $tablet-s) {
    gap: 8px;
  }

  @media screen and (max-width: $mobile-l) {
    padding-left: 60px;
  }
}

.feature {
  width: max-content;

  &:first-child {
    transform-origin: bottom;
    transform: rotate(315deg) translateX(30px);

    @media screen and (max-width: $tablet-s) {
      transform: rotate(315deg) translateX(15px);
    }

    .decorate-item_feature {
      transform: rotate(0deg);
    }
  }
}
</style>
