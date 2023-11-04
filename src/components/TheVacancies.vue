<template>
  <ul class="vacancies">
    <li
      v-for="vacancy in vacanciesInfo"
      :key="vacancy.id"
      class="vacancy"
    >
      <div class="vacancy__heading">
        <h3 class="vacancy__title">
          {{ vacancy.name }}
        </h3>
        <base-button class-name="vacancy__button-show" />
      </div>
      <div class="vacancy__container">
        <div class="experience">
          <span class="experience__number">{{ vacancy.experience }}</span>
          <span class="experience__text">лет опыта</span>
        </div>
        <p class="vacancy__description">
          {{ vacancy.description }}
        </p>
        <div class="vacancy-tabs">
          <ul class="vacancy-tabs__names">
            <li
              v-for="(info, index) in vacancy.info"
              :key="index"
              class="vacancy-tabs__name"
              @click="selectTab(index)"
            >
              <h4
                class="vacancy-tabs__title"
                :class="{ 'vacancy-tabs__title_active': activeTab === index }"
              >
                {{ info.name }}
              </h4>
            </li>
          </ul>
          <ul class="vacancy-tabs__list">
            <li
              v-for="(info, index) in vacancy.info"
              :key="index"
              class="vacancy-tab"
            >
              <ul class="vacancy-tab__list">
                <template v-if="activeTab === index">
                  <li
                    v-for="item in info.list"
                    :key="item.id"
                    class="vacancy-tab__item"
                  >
                    {{ item }}
                  </li>
                </template>
              </ul>
            </li>
          </ul>
          <base-button class-name="vacancy__button-send">
            <span class="vacancy__button-send-container">
              <svg-icon
                icon-name="icon-mail"
                icon-class="icon__mail"
              />
              Откликнуться
            </span>
          </base-button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import BaseButton from './BaseButton.vue';
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'TheVacancies',
  components: { BaseButton, SvgIcon },
  props: {
    vacanciesInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activeTab: 0
    };
  },
  methods: {
    selectTab(id) {
      this.activeTab = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.vacancies {
  @include flexible();
  @include maxWidth();
  flex-direction: column;
}

.vacancy {
  @include gridable();
  @include unmarkedList;

  &__container {
    max-width: 1308px;
    @include gridable();
    grid-template-areas:
      'exp description'
      '. tabs';
    gap: 100px;
    box-sizing: border-box;
    padding: 75px 0 100px;
    justify-content: space-between;
  }

  &__heading {
    @include flexible();
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-top: 3px solid $color-text;
    border-bottom: 3px solid $color-text;
    box-sizing: border-box;
  }
  &__title {
    margin: 0;
    color: $color-text;
    font-family: $font-family-heading;
    font-size: $font-size-subtitle-l;
    font-weight: 500;
    line-height: 2.91;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
    box-sizing: border-box;
  }

  &__button-show {
    @include defaultButton;
    @include cross();

    &::after {
      transform: rotate(0);
    }

    &::before {
      transform: rotate(90deg);
      transition: transform 0.5s easy;
    }

    &_opened::before {
      transform: rotate(0deg);
    }
  }

  &__button-send {
    @include defaultButton;
    @include flexible();
    font-family: $font-family-heading;
    font-size: $font-size-text-xl;
    color: $color-text;
    background-color: $color-decorate;
    border-radius: 50px;
    padding: 22px 0;
    text-transform: uppercase;
    line-height: 1.18;
    letter-spacing: 0.04rem;
    font-weight: 500;
    overflow: hidden;
    position: relative;

    &-container {
      @include flexible();
      @include defaultButton;
      gap: 21px;
      flex-wrap: nowrap;
      transform: translateY(0);
      transition: transform 0.3s ease;
    }

    &:hover &-container {
      transform: translateY(-200%);
    }

    &::before {
      content: 'Откликнуться';
      position: absolute;
      width: 100%;
      text-align: center;
      top: 100%;
      transform: translateY(0);
      transition: transform 0.3s ease;
    }

    &:hover::before {
      transform: translateY(-200%);
    }
  }

  &__description {
    grid-area: description;
    font-family: $font-family-text;
    font-size: $font-size-text-6xl;
    margin: 0;
    color: $color-text;
    font-weight: 400;
    line-height: 1.3;
    width: 100%;
    max-width: 835px;
  }
}

.vacancy-tabs {
  grid-area: tabs;
  @include flexible();
  flex-direction: column;
  max-width: 871px;
  font-family: $font-family-text;
  font-size: $font-size-text-xl;
  gap: 85px;
  font-weight: 400;
  color: $color-text;

  &__names {
    @include unmarkedList;
    @include flexible();
    justify-content: space-between;
    cursor: pointer;
  }

  &__title {
    line-height: 2.48;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
    margin: 0;
    width: max-content;
    opacity: 0.8;

    &_active {
      opacity: 1;
      border-bottom: 5px solid $color-text;
    }
  }

  &__list {
    @include unmarkedList;
  }
}

.vacancy-tab {
  @include flexible();
  flex-direction: column;
  gap: 85px;

  &__list {
    @include unmarkedList;
    @include gridable();
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 74px;
    max-width: 871px;
  }

  &__item {
    box-sizing: border-box;
    padding-top: 25px;
    opacity: 0.8;
    border-top: 1px solid rgba($color-border, 0.6);
  }
}

.experience {
  grid-area: exp;
  @include flexible(max-content);
  flex-direction: column;
  font-family: $font-family-text;
  font-weight: 400;
  color: $color-text;
  line-height: 1;

  &__number {
    font-size: $font-size-counter-l;
  }

  &__text {
    font-size: $font-size-text-xxl;
  }
}
</style>
