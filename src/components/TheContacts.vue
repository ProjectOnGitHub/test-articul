<template>
  <div class="contacts">
    <ul class="arrow">
      <li class="arrow__item">
        <decorate-item modifier="decorate-item_arrow"> просто вы </decorate-item>
      </li>
      <li class="arrow__item">
        <decorate-item modifier="decorate-item_arrow"> Я точно нужен вам, </decorate-item>
      </li>
      <li class="arrow__item">
        <decorate-item modifier="decorate-item_arrow"> пока Не знаете </decorate-item>
      </li>
    </ul>
    <p class="contacts__text">
      Eсли вы хотите стать частью нашей команды, но не нашли подходящую вакансию в списке выше, то
      <a
        href="mailto:info@articul.ru"
        class="contacts__link"
      >
        напишите нам
      </a>
    </p>
  </div>
</template>

<script>
import DecorateItem from './DecorateItem.vue';

export default {
  name: 'TheContacts',
  components: { DecorateItem }
};
</script>

<style lang="scss" scoped>
.contacts {
  @include gridable();
  @include maxWidth();
  grid-template-columns: 580px 1fr;
  align-items: center;
  gap: 90px 150px;

  @media screen and (max-width: $desktop-xl) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media screen and (max-width: $smartphone) {
    gap: 0;
  }

  &__text {
    width: 100%;
    max-width: 808px;
    margin: 0;
    font-weight: 500;
    font-size: clamp($font-size-text-3xl, 3vw, $font-size-text-7xl);
    line-height: 1.4;
    font-family: $font-family-heading;
    color: $color-text;
    text-transform: uppercase;
    letter-spacing: 0.07rem;

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-text-l, 3vw, $font-size-text-3xl);
    }
  }

  &__link {
    position: relative;
    padding-bottom: 2px;
    color: transparent;
    white-space: nowrap;
    background-image: linear-gradient(90deg, $color-decorate 50%, $color-text 50%);
    background-position: 100%;
    background-size: 200% 100%;
    background-clip: text;
    transition: background-position 1s ease-in-out;
    text-decoration-skip-ink: none;

    &:hover {
      background-position: 0;
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      display: block;
      height: 3px;
      transition: width 1s ease-in-out;
    }

    &::before {
      width: 100%;
      background-color: $color-text;
    }

    &::after {
      width: 0;
      background-color: $color-decorate;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

.arrow {
  @include unmarkedList;
  @include gridable(100%);
  justify-items: end;
  align-content: center;
  height: 100%;
  min-height: 485px;

  @media screen and (max-width: $desktop-xl) {
    justify-items: center;
  }

  @media screen and (max-width: $tablet-s) {
    min-height: 400px;
  }

  @media screen and (max-width: $smartphone) {
    min-height: 300px;
  }

  &__item {
    &:nth-of-type(1) {
      transform-origin: center;
      transform: rotate(45deg) translate(-70px, 0px);
    }

    &:nth-of-type(2) {
      transform: translateX(-150px);
    }

    &:nth-of-type(3) {
      transform-origin: center;
      transform: rotate(-45deg) translate(0, 50px);
    }

    @media screen and (max-width: $desktop-xl) {
      &:nth-of-type(1) {
        transform: rotate(45deg) translate(40px, -130px);
      }

      &:nth-of-type(2) {
        transform: translateX(-80px);
      }

      &:nth-of-type(3) {
        transform: rotate(-45deg) translate(90px, 130px);
      }
    }

    @media screen and (max-width: $tablet-xm) {
      &:nth-of-type(1) {
        transform: rotate(45deg) translate(30px, -90px);
      }

      &:nth-of-type(2) {
        transform: translateX(-50px);
      }

      &:nth-of-type(3) {
        transform: rotate(-45deg) translate(60px, 95px);
      }
    }

    @media screen and (max-width: $smartphone) {
      &:nth-of-type(1) {
        transform: rotate(45deg) translate(20px, -60px);
      }

      &:nth-of-type(2) {
        transform: translateX(-30px);
      }

      &:nth-of-type(3) {
        transform: rotate(-45deg) translate(50px, 60px);
      }
    }
  }
}
</style>
