<template>
  <ul class="vacancies">
    <li
      v-for="vacancy in vacanciesInfo"
      :key="vacancy.id"
      class="vacancy"
    >
      <h3 class="vacancy__title">
        {{ vacancy.name }}
      </h3>
      <div class="experience">
        <span class="experience__number">{{ vacancy.experience }}</span>
        <span class="experience__text">лет опыта</span>
      </div>
      <p class="vacancy__description">
        {{ vacancy.description }}
      </p>
      <ul class="vacancy__tabs">
        <li
          v-for="info in vacancy.info"
          :key="info.id"
          class="vacancy-tab"
        >
          <h4 class="vacancy-tab__title">
            {{ info.name }}
          </h4>
          <ul class="vacancy-tab__list">
            <li
              v-for="(item, index) in info.list"
              :key="index"
              class="vacancy-tab__item"
            >
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
      <button
        class="button"
        type="button"
      >
        Откликнуться
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TheVacancies',
  props: {
    vacanciesInfo: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped></style>
