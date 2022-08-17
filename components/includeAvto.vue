<template lang="pug">
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
</template>

<script>
import IncludePage from '@/components/IncludePage'

export default {
  name: 'SHTPSection',
  components: {
    IncludePage
  }
}
</script>

<style lang="scss">
  @import '~@/assets/styles/global/helpers/media';

  .SHTP-section {
    display: flex;
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
        background-color: var(--color-pink-btn);
        border-color: var(--color-pink-btn);
        color: var(--color-white);
      }

      @include mq(md) {
        margin-top: 0;
      }
    }
  }

</style>
