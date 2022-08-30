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
            | софинанси-рование
        .apk-section__item
          span.apk-section__legend
            | 7
          span.apk-section__legend-text
            | дневный интенсив
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

<style lang="scss" scoped>
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
</style>
