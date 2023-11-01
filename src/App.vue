<template>
  <section class="popup">
    <div class="about">
      <ul class="features">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="feature"
        >
          <span class="decorate-item">{{ feature }}</span>
        </li>
      </ul>
      <h1 class="about__title about__title_first-row">Карьера</h1>
      <h2 class="about__title about__title_second-row">в Articul</h2>
      <svg-icon icon-class="icon icon__vacancy" />
      <p class="about__text">
        Мы верим, что каждый вновь приходящий обогащает нашу жизнь, привносит свои идеи, свои
        смыслы, свое настроение, свою уникальность
      </p>
    </div>
    <ul class="vacancies">
      <li
        v-for="vacancy in vacancies"
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
    <div class="contact">
      <div class="arrow-text">
        <span class="decorate-item">Я точно нужен вам,</span>
        <span class="decorate-item">просто вы</span>
        <span class="decorate-item">пока Не знаете</span>
      </div>
      <p class="contact__text">
        Eсли вы хотите стать частью нашей команды, но не нашли подходящую вакансию в списке выше, то
        <a
          href="mailto:info@articul.ru"
          class="contact__link"
        >
          напишите нам
        </a>
      </p>
    </div>
  </section>
</template>

<script>
import SvgIcon from './components/SvgIcon.vue';

export default {
  components: { SvgIcon },
  data() {
    return {
      features: ['Удаленка', 'Высокая зарплата', 'Обучение', 'Вечеринки', 'Сильная комаанда'],
      vacancies: [
        {
          id: 1,
          name: 'Middle Web Developer',
          experience: '>6',
          description:
            'Самостоятельный дизайнер с отличной насмотренностью, который способен без помощи арт-директора решать как базовые дизайн-задачи так и сложные (дизайн лендингов, подач, презентаций и тд.)',
          info: [
            {
              id: 1,
              name: 'Требования',
              list: [
                'Опыт работы в сфере графики и веба: 6–9 лет и выше',
                'Умение при необходимости самостоятельно взаимодействовать в коммуникации с подрядчиком',
                'Понимание проектирования взаимодействия и создания информационной архитектуры проекта',
                'Сильное портфолио с кейсами в сфере корпоративного/информационного веба',
                'Умение декомпозировать задачи, организовывать и синхронизировать командную работу с другими дизайнерами',
                'Умение быстро подобрать нужные референсы из топовых работ в сфере веба и использовать их в работе',
                'Ответственность, желание развиваться, обучаемость, перфекционизм, любовь к деталям и минимализму'
              ]
            },
            {
              id: 2,
              name: 'Обязанности',
              list: [
                'Создавать концепцию, продумывать структуры и функционал продукта',
                'Заниматься доработкой проектов',
                'Заниматься проектированием и дизайном интерфейсов, подготовкой рабочих макетов для передачи в команду разработки',
                'Работать с фотоматериалами, с иллюстрациями, обработкой, коллажированием., пиктограммами, другой графикой',
                'Выполнять работы по дизайну и проектированию веб-и мобильных интерфейсов'
              ]
            },
            {
              id: 3,
              name: 'Стек',
              list: [
                'Figma',
                'Ps',
                'Ai',
                'Сильное портфолио с кейсами в сфере корпоративного/информационного веба',
                'AE',
                '3d редакторы (оптимально Blender)',
                'webflow'
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
