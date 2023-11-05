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
  grid-template-areas:
    'features first-row first-row'
    'second-row second-row  counter'
    'text text counter';
  grid-template-columns: 560px min-content auto;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: $desktop-xxl) {
    grid-template-columns: 420px min-content auto;
    gap: 20px;
  }

  @media screen and (max-width: $desktop-l) {
    grid-template-areas:
      'features features '
      'first-row first-row '
      'second-row second-row '
      'counter text';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto) minmax(250px, 100%);
    justify-items: left;
  }

  @media screen and (max-width: $tablet-s) {
    grid-template-areas:
      'features'
      'first-row'
      'second-row'
      'text'
      'counter';
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, max-content);
    justify-items: left;
  }

  &__title {
    max-width: max-content;
    margin: 0;
    font-weight: 500;
    font-size: $font-size-title-xxl;
    line-height: 0.9;
    font-family: 'DrukWide', Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.34rem;
    white-space: nowrap;

    @media screen and (max-width: $desktop-3xl) {
      font-size: $font-size-title-l;
    }

    @media screen and (max-width: $desktop-l) {
      font-size: clamp(
        clamp($font-size-title-xs, $font-size-title-s, 11.75vw),
        11vw,
        $font-size-title-xxl
      );
      letter-spacing: 0.18rem;
    }

    @media screen and (max-width: $tablet-s) {
      justify-self: start;
      font-size: clamp(
        clamp($font-size-title-xs, $font-size-title-s, 11vw),
        11vw,
        $font-size-title-xxl
      );
    }

    @media screen and (max-width: $smartphone) {
      justify-self: start;
      font-size: clamp(min(7vw, $font-size-title-xs), 10.5vw, $font-size-title-xxl);
    }

    &_first-row {
      grid-area: first-row;
      align-self: end;
      color: $color-text;

      @media screen and (max-width: $desktop-3xl) {
        justify-self: start;
      }
    }

    &_second-row {
      grid-area: second-row;
      align-self: start;
      color: $color-decorate;
    }
  }

  &__text {
    grid-area: text;
    justify-self: center;
    align-self: end;
    width: 100%;
    max-width: 499px;
    margin: 0;
    padding-top: 60px;
    font-weight: normal;
    font-size: $font-size-text-3xl;
    line-height: 1.34;
    font-family: $font-family-text;
    color: $color-text;

    @media screen and (max-width: $desktop-l) {
      align-self: center;
      padding: 0;
      font-size: $font-size-text-xl;
      line-height: 1.27;
    }

    @media screen and (max-width: $tablet-s) {
      max-width: max-content;
      line-height: 1.25;
    }

    @media screen and (max-width: $smartphone) {
      font-size: $font-size-decorate-m;
    }
  }
}

.counter {
  @include counterSizes();
  position: relative;
  grid-area: counter;
  justify-content: center;
  align-items: center;
  align-self: center;
  overflow: hidden;

  @media screen and (max-width: $tablet-s) {
    justify-self: end;
  }

  &__number {
    position: relative;
    display: inline-block;
    font-size: $font-size-counter-xl;
    font-family: $font-family-heading;
    color: $color-text;

    @media screen and (max-width: $desktop-l) {
      font-size: $font-size-counter-m;
    }

    @media screen and (max-width: $desktop-m) {
      font-size: $font-size-counter-s;
    }

    @media screen and (max-width: $tablet-s) {
      font-size: $font-size-counter-xs;
    }
  }
}
</style>
