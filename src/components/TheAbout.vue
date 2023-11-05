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
  @include maxWidth();
  grid-template-columns: 560px min-content auto;
  grid-template-areas:
    'features first-row first-row'
    'second-row second-row  counter'
    'text text counter';
  gap: 30px;
  justify-content: center;

  @media screen and (max-width: $desktop-xxl) {
    gap: 20px;
    grid-template-columns: 420px min-content auto;
  }

  @media screen and (max-width: $desktop-l) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'features features '
      'first-row first-row '
      'second-row second-row '
      'counter text';
    justify-items: left;
  }

  @media screen and (max-width: $desktop-m) {
  }

  &__title {
    font-family: 'DrukWide', Arial, sans-serif;
    font-size: $font-size-title-xxl;
    font-weight: 500;
    line-height: 0.9;
    text-transform: uppercase;
    letter-spacing: 0.34rem;
    margin: 0;
    white-space: nowrap;
    max-width: max-content;

    @media screen and (max-width: $desktop-3xl) {
      font-size: $font-size-title-l;
    }

    @media screen and (max-width: $desktop-l) {
      justify-self: start;
      font-size: $font-size-title-xl;
    }

    @media screen and (max-width: $desktop-m) {
      font-size: $font-size-title-l;
      letter-spacing: 0.18rem;
    }

    @media screen and (max-width: $desktop-s) {
      font-size: $font-size-title-m;
    }

    @media screen and (max-width: $tablet-l) {
      font-size: $font-size-title-s;
    }

    &_first-row {
      grid-area: first-row;
      color: $color-text;
      align-self: end;

      @media screen and (max-width: $desktop-3xl) {
        justify-self: end;
      }
    }

    &_second-row {
      grid-area: second-row;
      color: $color-decorate;
      align-self: start;
    }
    @media screen and (max-width: $desktop-3xl) {
      justify-self: start;
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
    justify-self: center;
    align-self: end;
    padding-top: 60px;

    @media screen and (max-width: $desktop-l) {
      align-self: auto;
    }
  }
}

.counter {
  grid-area: counter;
  @include flexible(330px);
  justify-content: center;
  align-items: center;
  height: 330px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: $desktop-xxl) {
    height: 300px;
    width: 300px;
  }

  &__number {
    display: inline-block;
    position: relative;
    font-family: $font-family-heading;
    color: $color-text;
    font-size: $font-size-counter-xl;
  }
}
</style>
