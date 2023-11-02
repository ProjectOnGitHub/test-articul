<template>
  <div class="about">
    <slot></slot>
    <h1 class="about__title about__title_first-row">Карьера</h1>
    <h2 class="about__title about__title_second-row">в Articul</h2>

    <div class="counter">
      <svg-icon
        icon-class="icon icon__counter"
        icon-name="icon-counter"
      />
      <span class="counter__number">5</span>
    </div>
    <p class="about__text">
      Мы верим, что каждый вновь приходящий обогащает нашу жизнь, привносит свои идеи, свои смыслы,
      свое настроение, свою уникальность
    </p>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'TheAbout',
  components: { SvgIcon }
};
</script>

<style lang="scss" scoped>
.about {
  @include gridable();
  max-width: calc($desktop-l + 2 * 6rem);
  box-sizing: border-box;
  padding: 0 6rem;
  grid-template-areas:
    'features first-row first-row'
    'second-row second-row counter'
    '. text counter';

  &__title {
    font-family: 'DrukWide', Arial, sans-serif;
    font-size: $font-size-title-l;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.34rem;
    margin: 0;
    white-space: nowrap;

    &_first-row {
      grid-area: first-row;
      color: $color-text;
    }

    &_second-row {
      grid-area: second-row;
      color: $color-decorate;
    }
  }
  &__text {
    grid-area: text;
    font-family: $font-family-text;
    font-size: $font-size-text-3xl;
    width: 100%;
    font-weight: normal;
    max-width: 499px;
    line-height: 1.34;
    margin: 0;
    color: $color-text;
  }
}

.counter {
  grid-area: counter;
  @include flexible(361px);
  justify-content: center;
  align-items: center;
  height: 361px;
  position: relative;

  &__number {
    display: inline-block;

    position: relative;
    font-family: $font-family-heading;
    color: $color-text;
    font-size: $font-size-title-l;
  }
}
</style>
