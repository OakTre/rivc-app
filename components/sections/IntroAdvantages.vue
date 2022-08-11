<template lang="pug">
  section.section.advantages
    .site-container.advantages__cantainer
      ul.advantages__list.grid-container
        li.advantages__item(v-for="item in list" :key="item.id")
          .advantages__img-wrapper
            img(:src="getDynamicFile(item.img)" alt="" class="advantages__img")
          p
            | {{ item.text }}
</template>

<script>
export default {
  data () {
    return {
      list: [
        { id: 0, text: '3 500 агропредприятий используют IT - решения и сопровождаются нами', img: 'img/intro-advantages/icon.svg' },
        { id: 1, text: '19 проектов по цифровизации отрасли', img: 'img/intro-advantages/icon1.svg' },
        { id: 2, text: '50 лет опыта работы с данными в сельском хозяйстве', img: 'img/intro-advantages/icon2.svg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/global/helpers/media';

.advantages {
  position: relative;
  z-index: 1;
  margin-top: -9.7rem;

  &__item {
    grid-column: 4 span;
    padding: 6.4rem;
    border-radius: 1.2rem;
    background-color: var(--color-dark-blue);
    border: 1px solid var(--color-dark-blue2);

    @include mq(lg) {
      padding: 3.2rem;
    }

    @include mq(md) {
      grid-column: 12 span;
      display: flex;
    }

    @include mq(sm) {
      grid-column: 4 span;
      flex-direction: column;
      padding: 3.7rem 2.3rem;
      border-radius: 0.8rem;
    }

    p {
      font: var(--font-m);
      max-width: 25.6rem;

      b, strong {
        font-weight: 700;
      }

      @include mq(sm) {
        font: var(--font-xs);
      }
    }
  }

  &__img-wrapper {
    width: 10.6rem;
    height: 8.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-dark-blue2);
    margin-bottom: 3.2rem;
    border-radius: 1rem;

    img {
      width: 5.7rem;
      height: 5.7rem;
      object-fit: cover;
    }

    @include mq(md) {
      margin-bottom: 0;
      margin-right: 3.2rem;
    }

    @include mq(sm) {
      width: 7.1rem;
      height: 5.1rem;
      margin: 0;
      margin-bottom: 1.7rem;
      border-radius: 0.6rem;

      img {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
}
</style>
