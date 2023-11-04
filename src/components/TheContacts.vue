<template>
  <div class="contacts">
    <div class="arrow-text">
      <span class="decorate-item">Я точно нужен вам,</span>
      <span class="decorate-item">просто вы</span>
      <span class="decorate-item">пока Не знаете</span>
    </div>
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
export default {
  name: 'TheContacts'
};
</script>

<style lang="scss" scoped>
.contacts {
  @include flexible();
  @include maxWidth();
  padding-top: 120px;
  padding-bottom: 120px;

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
    @include defaultLink;
    color: $color-text;
    position: relative;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      display: block;
      height: 3px;
      transition: width 0.5s ease-in-out;
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

@keyframes stripes {
  to {
    background-size: 100% 100%;
  }
}
</style>
