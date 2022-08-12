<template lang="pug">
  IncludePage(
    title="Kazan Digital Week – 2022"
    text="Блок: Цифровые технологии в сфере сельского хозяйства"
    img="img/kdw/laptop.png"
    link="123"
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
          | Обмена опытом по цмфровой трансформации АПК
      .KDW-section__item
        span.KDW-section__legend
          | 1 000 м
        span.KDW-section__legend-text
          | Площадь блока АПК
</template>

<script>
import IncludePage from '@/components/IncludePage'

export default {
  name: 'KDWSection',
  components: {
    IncludePage
  }
}
</script>

<style lang="scss">
  @import '~@/assets/styles/global/helpers/media';

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
        background-color: var(--color-blue);
        border-color: var(--color-blue);
        color: var(--color-white);
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
</style>
