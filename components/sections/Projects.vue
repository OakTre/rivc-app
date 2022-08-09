<template lang="pug">
section.section.projects
  .site-container.projects__container
    h2.site-heading Проекты
    ul.projects__list.grid-container
      li.projects__item
        h3.projects__item-headding АГРОПОЛИЯ
      li.projects__item
        h3.projects__item-headding Программа повышения квалификации
      li.projects__item
        h3.projects__item-headding Программа поддержки автоматизации
      li.projects__item
        h3.projects__item-headding Kazan Digital Week
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.projects {

  &__container {
    padding-top: 6.5rem;
    position: relative;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 38.3rem;
      height: 0.1rem;
      background: linear-gradient(90deg, #a82f93 0%, #2966ff 100%);
      content: "";
    }
  }

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
  }

  &__item-headding {
    font: var(--font-l);
    color: var(--color-white);
  }
}
</style>
