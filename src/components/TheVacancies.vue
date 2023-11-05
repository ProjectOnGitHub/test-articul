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
    max-width: 1308px;
    @include gridable();
    box-sizing: border-box;
    opacity: 0;
    overflow: hidden;
    max-height: 0px;
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
    gap: 100px;
    box-sizing: border-box;
    padding: clamp(58px, 5vw, 74px) 0 clamp(75px, 7vw, 100px);
    justify-content: space-between;

    @media screen and (max-width: $tablet-l) {
      column-gap: 0;
      row-gap: 80px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'exp description'
        'tabs tabs';
    }

    @media screen and (max-width: $tablet-s) {
      padding: clamp(30px, 7vw, 58px) 0 clamp(44px, 9vw, 75px);
      grid-template-columns: 1fr;
      grid-template-areas:
        'exp'
        'description'
        'tabs';
      row-gap: 30px;
    }
  }

  &__heading {
    @include flexible();
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-top: 3px solid $color-text;
    border-bottom: 3px solid $color-text;
    box-sizing: border-box;
    cursor: pointer;
    box-sizing: border-box;
    padding: clamp(40px, 5vw, 60px) 0;

    @media screen and (max-width: $tablet-s) {
      padding: clamp(18px, 5vw, 40px) 0;
      border-width: 2px;
    }
  }

  &__title {
    line-height: 1.2;
    margin: 0;
    color: $color-text;
    font-family: $font-family-heading;
    font-size: clamp($font-size-subtitle-m, 5vw, $font-size-subtitle-xl);
    font-weight: 500;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
    box-sizing: border-box;

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
    font-family: $font-family-heading;
    font-size: clamp($font-size-button-m, 2vw, $font-size-button-l);
    color: $color-text;
    background-color: $color-decorate;
    border-radius: 50px;
    padding: clamp(13px, 1vw, 18px) 0;
    text-transform: uppercase;
    line-height: 1.18;
    letter-spacing: 0.04rem;
    font-weight: 500;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-button-s, 4vw, $font-size-button-m);
    }

    &-container {
      @include flexible();
      @include defaultButton;
      gap: 21px;
      flex-wrap: nowrap;
      transform: translateY(0);
      transition: transform 0.3s ease;

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
    font-size: clamp($font-size-text-xl, 2vw, $font-size-text-6xl);
    margin: 0;
    color: $color-text;
    font-weight: 400;
    line-height: 1.3;
    width: 100%;
    max-width: 835px;

    @media screen and (max-width: $tablet-s) {
      font-size: clamp($font-size-text-l, 4vw, $font-size-text-xl);
      line-height: 1.44;
    }
  }
}

.vacancy-tabs {
  grid-area: tabs;
  @include flexible();
  flex-direction: column;
  max-width: 871px;
  font-size: clamp($font-size-text-l, 2vw, $font-size-text-xl);
  gap: 85px;
  font-weight: 400;
  color: $color-text;

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
    cursor: pointer;
    font-family: $font-family-heading;
  }

  &__title {
    line-height: 2.48;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
    margin: 0;
    width: max-content;
    opacity: 0.8;

    @media screen and (max-width: $tablet-l) {
      font-size: clamp($font-size-default, 3vw, $font-size-text-l);
    }

    &_active {
      opacity: 1;
      border-bottom: 5px solid $color-text;

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
    font-family: $font-family-text;
    @include unmarkedList;
    @include gridable();
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 74px;
    line-height: 1.45;

    @media screen and (max-width: $tablet-l) {
      line-height: 1.38;
      row-gap: 40px;
    }

    @media screen and (max-width: $tablet-s) {
      gap: 0;
      font-size: clamp($font-size-text-m, 3vw, $font-size-text-xl);
    }
  }

  &__item {
    box-sizing: border-box;
    padding-top: 25px;
    opacity: 0.8;
    border-top: 1px solid rgba($color-border, 0.6);

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
  grid-area: exp;
  @include flexible(max-content);
  flex-direction: column;
  font-family: $font-family-text;
  font-weight: 400;
  color: $color-text;
  line-height: 1;

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
