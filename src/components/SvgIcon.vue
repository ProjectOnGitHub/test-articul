<template>
  <svg
    :class="iconClass"
    aria-hidden="true"
  >
    <use :xlink:href="`#${iconName}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  &__counter {
    position: absolute;
    flex-shrink: 0;
    animation: rotation 20s infinite linear;
    @include counterSizes();
  }

  &__mail {
    @include flexible(36px);
    height: 36px;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
