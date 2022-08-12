<template lang="pug">
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
</template>

<script>
import IncludePage from '@/components/IncludePage'
import Button from '@/components/UI/Button'

export default {
  name: 'AgropoliyaSection',
  components: {
    IncludePage,
    Button
  },
  data () {
    return {
      list: [
        'Аналитика на основе корректных данных',
        'Единая система сбора и хранения данных по всем направлениям',
        'Автоматическая передача данных в другие ГИС',
        'Прозрачность статистики',
        'Возможность упрощенной подачи документов на субсидии'
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/styles/global/helpers/media';

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
