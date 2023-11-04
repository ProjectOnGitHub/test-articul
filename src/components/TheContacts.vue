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
  grid-template-columns: 580px 1fr;
  @include maxWidth();
  align-items: center;
  gap: 150px;

  &__text {
    font-family: $font-family-heading;
    color: $color-text;
    text-transform: uppercase;
    width: 100%;
    font-size: $font-size-text-7xl;
    font-weight: 500;
    letter-spacing: 0.07rem;
    line-height: 1.4;
    max-width: 808px;
    margin: 0;
  }

  &__link {
    color: transparent;
    background-image: linear-gradient(90deg, $color-decorate 50%, $color-text 50%);
    background-position: 100%;
    background-size: 200% 100%;
    background-clip: text;
    transition: background-position 1s ease-in-out;
    position: relative;
    text-decoration-skip-ink: none;
    padding-bottom: 2px;

    &:hover {
      background-position: 0;
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
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
  align-content: center;
  justify-items: end;
  min-height: 485px;
  height: 100%;

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
      transform: rotate(-46deg) translate(0, 40px);
    }
  }
}
</style>
