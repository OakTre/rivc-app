<template lang="pug">
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
          | Хозяйств прошли отбор, находятся на этапе анализа
</template>

<script>
import IncludePage from '@/components/IncludePage'

export default {
  name: 'APKSection',
  components: {
    IncludePage
  },
  data () {
    return {
      list: [
        'Трансформация управленческих компетенций',
        'Индивидуальный план цифрового развития хозяйства'
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/styles/global/helpers/media';

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
        background-color: var(--color-purple-btn);
        border-color: var(--color-purple-btn);
        color: var(--color-white);
      }

      @include mq(md) {
        margin-top: 0;
      }
    }
  }
</style>
