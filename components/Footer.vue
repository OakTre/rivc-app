<template lang="pug">
  footer.footer
    .site-container.footer__container
      p.footer__legend {{ setCompanyTitle }}
      p.footer__legend {{ setRightTitle }}
      nuxt-link(to="/policy" class="footer__legend _underline") {{ setPolicyTitle }}
      Button.footer__btn(
        @click.native="openModal"
      )
        | {{ setBtnTitle }}
</template>

<script>
import Button from '@/components/UI/Button'
export default {
  components: {
    Button
  },
  data () {
    return {
      companytitle: 'АО «РИВЦ»',
      copyright: 'Все права защищены',
      policy: 'Политика конфиденциальности',
      btnTitle: 'Связаться с нами',
      pageLocale: this.$i18n.locale
    }
  },
  computed: {
    setBtnTitle () {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === 'ru' ? 'Связаться с нами' : 'Contact us'
    },
    setPolicyTitle () {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === 'ru' ? 'Политика конфиденциальности' : 'Privacy policy'
    },
    setRightTitle () {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === 'ru' ? 'Все права защищены' : 'All rights reserved'
    },
    setCompanyTitle () {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === 'ru' ? 'АО «РИВЦ»' : 'RICC'
    }
  },
  created () {
    this.setInfo()
  },
  methods: {
    openModal () {
      this.$store.commit('SET_MODAL', true)
    },
    setInfo () {
      this.companytitle = this.pageLocale === 'en' ? 'RICC' : 'АО «РИВЦ»'
      this.copyright = this.pageLocale === 'en' ? 'All rights reserved' : 'Все права защищены'
      this.policy = this.pageLocale === 'en' ? 'Privacy policy' : 'Политика конфиденциальности'
      this.btnTitle = this.pageLocale === 'en' ? 'Contact us' : 'Связаться с нами'
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/global/helpers/media';

  .footer {
    padding: 7.2rem 0;
    border-top: 1px solid var(--color-dark-blue2);

    @include mq(sm) {
      border: none;
      padding-top: 0;
      padding-bottom: 8.3rem;
    }

    &__container {
      display: flex;
      align-items: center;
      gap: 5.5rem;

      @include mq(sm) {
        flex-direction: column;
        justify-content: center;
        gap: 0;
      }
    }

    &__legend {
      color: #515F84;

      &._underline {
        text-decoration: underline;
      }

      &:hover {
        text-decoration: none;
      }

      @include mq(md) {
        &:nth-child(1) {
          display: none;
        }
      }

      @include mq(sm) {
        font: var(--font-xs-mobile);
        margin-bottom: 0.8rem;
        display: inline-block;
        color: #515F84;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &__btn {
      margin-left: auto;

      @include mq(md) {
        display: none;
      }
    }
  }
</style>
