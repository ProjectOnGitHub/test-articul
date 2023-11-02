<template>
  <ul class="features">
    <li
      v-for="(item, index) in featuresInfo"
      :key="index"
      class="feature"
    >
      <decorate-item>{{ item }}</decorate-item>
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

<style lang="scss" scoped></style>
