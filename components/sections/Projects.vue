<template lang="pug">
section.section.projects(id="projects")
  .site-container.projects__container.site-top-line
    h2.site-heading Проекты
    ul.projects__list.grid-container
      nuxt-link.projects__item(
        to="/agropoliya"
      )
        h3.projects__item-headding АГРОПОЛИЯ
      nuxt-link.projects__item(
        to="/apk"
      )
        h3.projects__item-headding Программа повышения квалификации
      nuxt-link.projects__item(
        to="/shtp"
      )
        h3.projects__item-headding Программа поддержки автоматизации
      nuxt-link.projects__item(
        to="/kdw"
      )
        h3.projects__item-headding Kazan Digital Week
</template>

<script>
export default {}
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
