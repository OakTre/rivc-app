<template lang="pug">
section.section.why-us
  .site-container.why-us__container
    h2.why-us__heading.site-heading Почему РИВЦ
    ul.why-us__list.grid-container
      li.why-us__item(v-for="item in whyList" :key="item.id")
        .why-us__item-inner
          h3.why-us__item-heading {{ item.heading }}
          .why-us__item-text
            p
              | {{ item.text1 }}
            p
              | {{ item.text2 }}
</template>

<script>
export default {
  data () {
    return {
      whyList: [
        { id: 0, heading: 'Эффективность', text1: 'Основная цель нашей деятельности – предоставит аграриям инновационные решения для эффективной работы и роста агропромышленного бизнеса', text2: 'Сельское хозяйство одна из ключевых отраслей экономики, от эффективной работы сельхозтоваропроизводителей зависит: доступность продуктов питания, здоровье нации и благополучие страны' },
        { id: 1, heading: 'Доступность технологий', text1: 'Мы заботимся о том, чтобы современные технологии были доступны всем участникам агропромышленногокомплекса.', text2: 'Наша задача – создать комфортные условия для развития бизнеса даже в самых труднодоступных уголках нашейстраны. На помощь могут рассчитывать, как крупные агрохолдинги, так и совсем небольшие фермские хозяйства' },
        { id: 2, heading: 'Открытые отношения', text1: 'Мы выстраиваем отношения внутри компании и с партнерами на взаимном уважении и доверии.', text2: 'Ценность доверительных отношений означает, что одним из наших главных приоритетов является честная совместная работа, направленная на достижение больших результатов' },
        { id: 3, heading: 'Экология и ресурсосбережение', text1: 'Системы аналитики больших данных помогают рационально использовать природные ресурсы, сохраняя целостность нашей планеты.', text2: 'Потенциал в виде почвенных и климатических ресурсов гарантирует благополучие нашей планеты. Экология играет важную роль и затрагивает все сферы деятельности людей. С ухудшением состояния природной среды замедляется развитие бизнеса и качество жизни каждого человека' }
      ]
    }
  }
}
</script>

<style lang='scss'>
.why-us {
  &__container {
    position: relative;
    padding-top: 6.5rem;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 33.5rem;
      width: 100%;
      height: 0.1rem;
      background: var(--gradient-bg);
      content: "";
    }
  }

  &__item {
    grid-column: 6 span;
    display: flex;
    flex-direction: column;
    background: var(--gradient-main);
    padding: 0.1rem;
    border-radius: 1.2rem;
    min-height: 44.5rem;

    &:nth-child(2) {
      background: var(--gradient-bg);

      .why-us__item-inner {
        background: url("~@/assets/img/why-us/img2.svg"), var(--color-bg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom right;
      }
    }

    &:nth-child(3) {
      background: var(--gradient-bg);

      .why-us__item-inner {
        background: url("~@/assets/img/why-us/img3.svg"), var(--color-bg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom right;
      }
    }

    &:nth-child(4) {
      .why-us__item-inner {
        background: url("~@/assets/img/why-us/img4.svg"), var(--color-bg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom right;
      }
    }
  }

  &__item-inner {
    flex-grow: 1;
    border-radius: 1.2rem;
    padding: 3.3rem 2.5rem;
    background: url("~@/assets/img/why-us/img1.svg"), var(--color-bg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;
  }

  &__item-heading {
    font: var(--font-l);
    margin-bottom: 2.5rem;
  }

  &__item-text {
    font: var(--font-m);
    max-width: 59rem;

    p {
      margin-bottom: 1rem;

      b,
      strong {
        font-weight: 700;
      }

      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
