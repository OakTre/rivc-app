<template lang="pug">
section.section.projects(id="projects")
  .site-container.projects__container.site-top-line
    h2.site-heading Проекты
    ul.projects__list.grid-container
      button.projects__item(
        @click="openAgroModal"
      )
        h3.projects__item-headding АГРОПОЛИЯ
      button.projects__item(
        @click="openAPKModal"
      )
        h3.projects__item-headding Программа повышения квалификации
      button.projects__item(
        @click="openAutoModal"
      )
        h3.projects__item-headding Программа поддержки автоматизации
      button.projects__item(
        @click="openKDWModal"
      )
        h3.projects__item-headding Kazan Digital Week

  ModalComponent(:open="$store.state.modalComponent")
    IncludePage(
      title="ГИС АПК РТ Агрополия"
      text="Единая цифровая экосистема данных АПК Республики Татарстан"
      img="img/agro/laptop.png"
      link="https://agropoliya.ru/"
      btnClass="button--secondary"
      class="agro-section"
    )
      h3.agro-section__legend
      | 19 проектов по цифровизации
      p.agro-section__text
        | АПК для достижения цифровой зрелости
      h3.agro-section__legend
        | 8 проектов по цифровизации
      p.agro-section__text
        | Программа автоматизации агробизнеса на стадии опытной эксплуатации
      .agro-section__feautures
        p.agro-section__feat-heading Преимущества:
        ul
          li(v-for="item in list")
            | {{ item }}

  ModalComponent(:open="$store.state.modalComponentApk")
    IncludePage(
      title="Программа повышения калификации «Цифровая трансформация в АПК»"
      img="img/kval/laptop.png"
      link="https://edu.agropoliya.ru/"
      btnClass="apk-section__btn"
      class="apk-section"
    )
      .apk-section__list
        .apk-section__item
          span.apk-section__legend
            | 50%
          span.apk-section__legend-text
            | софинансирование
        .apk-section__item
          span.apk-section__legend
            | 7
          span.apk-section__legend-text
            | дневной интенсив
        .apk-section__item
          span.apk-section__legend
            | 50
          span.apk-section__legend-text
            | часов практики
      .apk-section__feautures
        p.apk-section__feat-heading Преимущества:
        ul
          li(v-for="item in list")
            | {{ item }}
      .apk-section__list
        .apk-section__item
          span.apk-section__legend
            | 39
          span.apk-section__legend-text
            | хозяйств прошли обучение
        .apk-section__item
          span.apk-section__legend
            | 29
          span.apk-section__legend-text
            | хозяйств прошли отбор, находятся на этапе анализа
  ModalComponent(:open="$store.state.modalComponentAuto")
    IncludePage(
      title="Программа поддержки автоматизации СХТП"
      text="50% софинансирование"
      img="img/avto/laptop.png"
      link="https://drive.google.com/file/d/1ErAeIk1toNvUA-H2-Gz10IQz3dTLmMJo/view"
      link2=true
      btnClass="SHTP-section__btn"
      btnText="Презентация"
      class="SHTP-section"
    )
      ul.SHTP-section__list
        li.SHTP-section__item
          span.SHTP-section__item-legend I этап
          span.SHTP-section__item-text Повышение квалификации по курсу #[br] «Цифровая трансформация в АПК»
        li.SHTP-section__item
          span.SHTP-section__item-legend II этап
          span.SHTP-section__item-text Анализ предприятия
        li.SHTP-section__item
          span.SHTP-section__item-legend III этап
          span.SHTP-section__item-text Комплексное внедрение систем автоматизации, #[br] обучение профильных специалистов СХТП

  ModalComponent(:open="$store.state.modalComponentKDW")
    IncludePage(
      title="Kazan Digital Week – 2022"
      text="Блок: Цифровые технологии в сфере сельского хозяйства"
      img="img/kdw/laptop.png"
      link="https://kdw-agro.com/"
      btnClass="KDW-section__btn"
      class="KDW-section"
    )
      .KDW-section__info
        span.KDW-section__legend-small Международный форум
        span.KDW-section__legend-big 21-24 сентября
        span.KDW-section__legend-small Выставочный центр «Казань Экспо», г. Казань

      .KDW-section__feautures
        h3 Демонстрация успешных результатов автоматизации и цифровизации АПК РТ
      .KDW-section__list
        .KDW-section__item
          span.KDW-section__legend
            | 4 320 мин.
          span.KDW-section__legend-text
            | обмена опытом по цифровой трансформации АПК
        .KDW-section__item
          span.KDW-section__legend
            | 1 000 м
          span.KDW-section__legend-text
            | площадь блока АПК
</template>

<script>
export default {
  name: 'ProjectSection',
  data () {
    return {
      argoModal: false,
      list: [
        'Аналитика на основе корректных данных',
        'Единая система сбора и хранения данных по всем направлениям',
        'Автоматическая передача данных в другие ГИС',
        'Прозрачность статистики',
        'Возможность упрощенной подачи документов на субсидии'
      ]
    }
  },
  methods: {
    openAgroModal () {
      this.$store.commit('SET_MODAL_COMPONENT', true)
    },
    openAPKModal () {
      this.$store.commit('SET_MODAL_COMPONENT_APK', true)
    },
    openAutoModal () {
      this.$store.commit('SET_MODAL_COMPONENT_AUTO', true)
    },
    openKDWModal () {
      this.$store.commit('SET_MODAL_COMPONENT_KDW', true)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/global/helpers/media';

.projects {
  &__list {
  }

  &__item {
    position: relative;
    grid-column: 6 span;
    border-radius: 1.2rem;
    background: url("~@/assets/img/projects/item1.svg"),
      linear-gradient(84.45deg, #2a0b5e 0%, #3851ed 97.98%);
    height: 26rem;
    display: flex;
    align-items: center;
    padding: 5.2rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
    text-align: left;

    &:nth-child(2) {
      background: url("~@/assets/img/projects/item2.svg"), var(--gradient-kval);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center left;
      justify-content: flex-end;
      text-align: right;
    }

    &:nth-child(3) {
      background: url("~@/assets/img/projects/item3.svg"), var(--gradient-avto);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center right;
    }

    &:nth-child(4) {
      background: url("~@/assets/img/projects/item4.svg"), var(--gradient-kdw);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center left;
      justify-content: flex-end;

      .projects__item-headding {
        text-transform: uppercase;
      }
    }

    @include mq(md) {
      padding: 3.2rem;
      height: 20rem;
    }

    @include mq(sm) {
      grid-column: 4 span;
      height: 18.7rem;
      justify-content: stretch !important;
      text-align: left !important;
      padding: 2.3rem;
    }
  }

  &__item-headding {
    font: var(--font-l);
    color: var(--color-white);

    @include mq(md) {
      font: var(--font-l-mobile);
    }

    @include mq(sm) {
      font: var(--font-m-mobile);
    }
  }
}

.KDW-section {
  background: var(--gradient-kdw);

  .include-page__image {
    width: 54rem;

    @include mq(md) {
      height: auto;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: var(--grid-offset);

    @include mq(md) {
      grid-template-columns: repeat(6, 1fr);
      align-self: stretch;
    }

    @include mq(sm) {
      gap: 2.6rem 0;
    }
  }

  &__item {
    grid-column: 3 span;

    @include mq(sm) {
      grid-column: 6 span;
    }
  }

  &__legend-small {
    display: block;
    font-weight: 700;
    margin-bottom: 0.4rem;

    @include mq(sm) {
      font: var(--font-xs);
      margin-bottom: 0;
    }
  }

  &__legend-big {
    font: var(--font-l);
    display: block;
    line-height: 1;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }

  &__legend-text {
    display: block;

    @include mq(sm) {
      font: var(--font-xs);
      line-height: 1;
    }
  }

  &__feautures {
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
    background-image: url('~@/assets/img/bg-zerno.png');
    background-position: center;
    background-size: contain;
    margin-left: -100%;
    padding-left: 100%;
    padding-right: 100%;
    margin-right: -100%;
    margin-top: 2.8rem;
    margin-bottom: 2.8rem;

    h3 {
      font: var(--font-l);
      max-width: 77.8rem;

      @include mq(sm) {
        font: var(--font-xs);
        font-weight: 700;
      }
    }

    @include mq(sm) {
      padding-top: 2.6rem;
      padding-bottom: 2.7rem;
    }
  }

  &__btn {
    background-color: var(--color-light-blue-btn);
    border-color: var(--color-light-blue-btn);
    margin-top: 8.4rem;

    &:hover {
      background-color: var(--color-white);
      border-color: var(--color-white);
      color: var(--color-blue);
    }

    @include mq(md) {
      margin-top: 0;
    }
  }

  &__legend {
    font: var(--font-l);
    margin-bottom: 0.4rem;
    display: block;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }
}

.SHTP-section {
  flex-direction: column;
  align-items: flex-start;
  background: var(--gradient-avto);

  &__list {
    align-self: stretch;
  }

  &__item {
    position: relative;
    padding: 4.3rem 2.4rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('~@/assets/img/avto/bg.png');
      background-size: contain;
      content: "";
    }

    @include mq(sm) {
      padding: 3rem 1rem;
      height: 12.5rem;
    }

    &:nth-child(1) {
      &::before {
        width: 22.6rem;
        clip-path: polygon(0 0, 76% 0, 100% 100%, 0 100%);

        @include mq(sm) {
          width: 19.6rem;
        }
      }
    }

    &:nth-child(2) {
      &::before {
        width: 28.1rem;
        clip-path: polygon(0 0, 81% 0, 100% 100%, 0 100%);

        @include mq(sm) {
          width: 24.2rem;
        }
      }
    }

    &:nth-child(3) {
      &::before {
        width: 33.6rem;
        clip-path: polygon(0 0, 84% 0, 100% 100%, 0 100%);

        @include mq(sm) {
          width: 29rem;
        }
      }
    }
  }

  &__item-legend {
    font: var(--font-l);
    min-width: 11rem;
    display: block;
    margin-right: 4.5rem;

    @include mq(sm) {
      font: var(--font-s);
      font-weight: 700;
      min-width: 6rem;
      margin-right: 3.4rem;
    }
  }

  &__item-text {
    font-weight: 700;
    display: block;

    @include mq(sm) {
      font: var(--font-xs);
      br {
        display: none;
      }
    }
  }

  &__btn {
    background-color: var(--color-purple-btn);
    border-color: var(--color-purple-btn);
    margin-top: 6rem;

    &:hover {
      background-color: var(--color-white);
      border-color: var(--color-white);
      color: var(--color-pink-btn);
    }

    @include mq(md) {
      margin-top: 0;
    }
  }
}

.apk-section {
  background: var(--gradient-kval);

  &__list {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: var(--grid-offset);
    margin-bottom: 2.2rem;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
      margin-top: 2.2rem;

      .apk-section__item {
        &:last-child {
          grid-column: 3 span;

          .apk-section__legend-text {
            max-width: 26.1rem;
          }
        }

        .apk-section__legend-text {
          max-width: 16.4rem;
        }
      }
    }

    @include mq(md) {
      grid-template-columns: repeat(6, 1fr);
      align-self: stretch;
    }

    @include mq(sm) {
      gap: 2.6rem 0;
    }
  }

  &__item {
    grid-column: 2 span;

    @include mq(sm) {
      grid-column: 3 span;
    }
  }

  &__legend {
    display: block;
    font: var(--font-l);
    margin-bottom: 0.6rem;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 700;
      margin-bottom: 0;
    }
  }

  &__legend-text {
    display: block;
    max-width: 24.3rem;

    @include mq(sm) {
      font: var(--font-xs);
      line-height: 1;
      max-width: 11.2rem;
    }
  }

  &__feautures {
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-image: url('~@/assets/img/bg-zerno.png');
    background-position: center;
    background-size: contain;
    margin-left: -100%;
    padding-left: 100%;
    padding-right: 100%;
    margin-right: -100%;
    margin-bottom: 3rem;

    ul {
      li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 0.5rem;

        &:last-child {
          margin-bottom: 0;
        }

        &::before {
          position: absolute;
          top: 0.9rem;
          left: 0;
          width: 0.4rem;
          height: 0.4rem;
          background-color: var(--color-white);
          border-radius: 50%;
          content: "";
        }

        @include mq(sm) {
          font: var(--font-xs);
          font-weight: 400;
        }
      }
    }

    @include mq(sm) {
      padding-top: 2.6rem;
      padding-bottom: 2.7rem;
    }
  }

  &__feat-heading {
    font-weight: 700;
    margin-bottom: 0.6rem;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }

  &__btn {
    background-color: var(--color-pink-btn);
    border-color: var(--color-pink-btn);
    margin-top: 8.4rem;

    &:hover {
      background-color: var(--color-white);
      border-color: var(--color-white);
      color: var(--color-purple-btn);
    }

    @include mq(md) {
      margin-top: 0;
    }
  }
}

.agro-section{
  background: var(--gradient-argo);

  &__legend {
    margin-bottom: 0.6rem;
    font-weight: 700;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }

  &__text {
    margin-bottom: 3rem;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 400;
      margin-bottom: 2.6rem;
    }
  }

  &__feautures {
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-image: url('~@/assets/img/bg-zerno.png');
    background-position: center;
    background-size: contain;
    margin-left: -100%;
    padding-left: 100%;
    padding-right: 100%;
    margin-right: -100%;

    ul {
      li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 0.5rem;

        &:last-child {
          margin-bottom: 0;
        }

        &::before {
          position: absolute;
          top: 0.9rem;
          left: 0;
          width: 0.4rem;
          height: 0.4rem;
          background-color: var(--color-white);
          border-radius: 50%;
          content: "";
        }

        @include mq(sm) {
          font: var(--font-xs);
          font-weight: 400;
        }
      }
    }

    @include mq(sm) {
      padding-top: 2.6rem;
      padding-bottom: 2.7rem;
    }
  }

  &__feat-heading {
    font-weight: 700;
    margin-bottom: 0.6rem;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
}
</style>
