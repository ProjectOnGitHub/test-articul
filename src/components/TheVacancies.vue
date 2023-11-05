<template>
  <ul class="vacancies">
    <li
      v-for="vacancy in vacanciesInfo"
      :key="vacancy.id"
      class="vacancy"
    >
      <div
        class="vacancy__heading"
        @click="toggleVacancyInfo(vacancy.id)"
      >
        <h3 class="vacancy__title">
          {{ vacancy.name }}
        </h3>
        <base-button
          class-name="vacancy__button-show"
          :class="{ 'vacancy__button-show_opened': vacancy.id === activeVacancy }"
        />
      </div>
      <div
        class="vacancy__container"
        :class="{ vacancy__container_opened: vacancy.id === activeVacancy }"
      >
        <div class="vacancy__info">
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
      activeTab: 0,
      activeVacancy: 0
    };
  },
  methods: {
    selectTab(id) {
      this.activeTab = id;
    },

    toggleVacancyInfo(id) {
      if (this.activeVacancy === id) {
        this.activeVacancy = null;
      } else {
        this.activeVacancy = id;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.vacancies {
  @include unmarkedList;
  @include flexible();
  @include maxWidth();
  flex-direction: column;
}

.vacancy {
  @include gridable();
  @include unmarkedList;

  &__container {
    @include gridable();
    box-sizing: border-box;
    max-width: 1308px;
    max-height: 0px;
    overflow: hidden;
    opacity: 0;
    transition: 1s ease-in-out;

    &_opened {
      max-height: 3000px;
      opacity: 1;
    }
  }

  &__info {
    @include gridable();
    grid-template-areas:
      'exp description'
      '. tabs';
    justify-content: space-between;
    box-sizing: border-box;
    padding: clamp(58px, 5vw, 74px) 0 clamp(75px, 7vw, 100px);
    gap: 100px;

    @media screen and (max-width: $tablet-l) {
      grid-template-areas:
        'exp description'
        'tabs tabs';
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0;
      row-gap: 80px;
    }

    @media screen and (max-width: $tablet-s) {
      grid-template-areas:
        'exp'
        'description'
        'tabs';
      grid-template-columns: 1fr;
      padding: clamp(30px, 7vw, 58px) 0 clamp(44px, 9vw, 75px);
      row-gap: 30px;
    }
  }

  &__heading {
    @include flexible();
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    box-sizing: border-box;
    padding: clamp(40px, 5vw, 60px) 0;
    border-top: 3px solid $color-text;
    border-bottom: 3px solid $color-text;
    cursor: pointer;
    gap: 20px;

    @media screen and (max-width: $tablet-s) {
      padding: clamp(18px, 5vw, 40px) 0;
      border-width: 2px;
    }
  }

  &__title {
    box-sizing: border-box;
    margin: 0;
    font-weight: 500;
    font-size: clamp($font-size-subtitle-m, 5vw, $font-size-subtitle-xl);
    line-height: 1.2;
    font-family: $font-family-heading;
    color: $color-text;
    text-transform: uppercase;
    letter-spacing: 0.14rem;

    @media screen and (max-width: $desktop-xl) {
      font-size: clamp($font-size-subtitle-m, 5vw, $font-size-subtitle-l);
    }

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-subtitle-s, 5vw, $font-size-subtitle-m);
    }
  }

  &__button-show {
    @include defaultButton;
    @include cross();

    @media screen and (max-width: $desktop-xl) {
      @include cross(50px, $color-text, 5px);
    }

    @media screen and (max-width: $tablet-s) {
      @include cross(21px, $color-text, 2px);
    }

    &::after {
      transform: rotate(0);
    }

    &::before {
      transform: rotate(90deg);
      transition: transform 1s ease-in-out;
    }

    &_opened::before {
      transform: rotate(0deg);
    }
  }

  &__button-send {
    @include defaultButton;
    @include flexible();
    position: relative;
    padding: clamp(13px, 1vw, 18px) 0;
    overflow: hidden;
    font-weight: 500;
    font-size: clamp($font-size-button-m, 2vw, $font-size-button-l);
    line-height: 1.18;
    font-family: $font-family-heading;
    color: $color-text;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
    background-color: $color-decorate;
    border-radius: 50px;

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-button-s, 4vw, $font-size-button-m);
    }

    &-container {
      @include flexible();
      @include defaultButton;
      flex-wrap: nowrap;
      transform: translateY(0);
      transition: transform 0.3s ease;
      gap: 21px;

      @media screen and (max-width: $tablet-l) {
        gap: 15px;
      }

      @media screen and (max-width: $tablet-s) {
        gap: 10px;
      }
    }

    &:hover &-container {
      transform: translateY(-200%);
    }

    &::before {
      content: 'Откликнуться';
      position: absolute;
      top: 100%;
      width: 100%;
      text-align: center;
      transform: translateY(0);
      transition: transform 0.3s ease;
    }

    &:hover::before {
      transform: translateY(-200%);
    }
  }

  &__description {
    grid-area: description;
    width: 100%;
    max-width: 835px;
    margin: 0;
    font-weight: 400;
    font-size: clamp($font-size-text-xl, 2vw, $font-size-text-6xl);
    line-height: 1.3;
    font-family: $font-family-text;
    color: $color-text;

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-text-l, 4vw, $font-size-text-xl);
      line-height: 1.44;
    }
  }
}

.vacancy-tabs {
  @include flexible();
  grid-area: tabs;
  flex-direction: column;
  max-width: 871px;
  font-weight: 400;
  font-size: clamp($font-size-text-l, 2vw, $font-size-text-xl);
  color: $color-text;
  gap: 85px;

  @media screen and (max-width: $tablet-l) {
    max-width: max-content;
    gap: 50px;
  }

  @media screen and (max-width: $tablet-s) {
    gap: 30px;
  }

  &__names {
    @include unmarkedList;
    @include flexible();
    justify-content: space-between;
    font-family: $font-family-heading;
    cursor: pointer;
  }

  &__title {
    width: max-content;
    margin: 0;
    line-height: 2.48;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
    opacity: 0.8;

    @media screen and (max-width: $tablet-l) {
      font-size: clamp($font-size-default, 3vw, $font-size-text-l);
    }

    &_active {
      border-bottom: 5px solid $color-text;
      opacity: 1;

      @media screen and (max-width: $tablet-l) {
        border-bottom-width: 2px;
      }
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
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    justify-content: space-between;
    line-height: 1.45;
    font-family: $font-family-text;
    gap: 74px;

    @media screen and (max-width: $tablet-l) {
      line-height: 1.38;
      row-gap: 40px;
    }

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-text-m, 3vw, $font-size-text-xl);
      gap: 0;
    }
  }

  &__item {
    box-sizing: border-box;
    padding-top: 25px;
    border-top: 1px solid rgba($color-border, 0.6);
    opacity: 0.8;

    @media screen and (max-width: $tablet-s) {
      padding-top: 20px;
      padding-bottom: 20px;

      &:first-of-type {
        padding-top: 0;
        border: none;
      }
    }
  }
}

.experience {
  @include flexible(max-content);
  grid-area: exp;
  flex-direction: column;
  font-weight: 400;
  line-height: 1;
  font-family: $font-family-text;
  color: $color-text;

  &__number {
    font-size: clamp($font-size-counter-m, 10vw, $font-size-counter-l);

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-counter-xs, 12vw, $font-size-counter-m);
    }
  }

  &__text {
    font-size: clamp($font-size-subtitle-s, 2vw, $font-size-text-xxl);

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-text-m, 4vw, $font-size-subtitle-s);
    }
  }
}
</style>
