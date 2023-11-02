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
  transform: rotate(-90deg);
}

.feature {
  width: max-content;

  &:first-child {
    transform: rotate(135deg) translate(-30px, 60px);
  }
}
</style>
