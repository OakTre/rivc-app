<template lang="pug">
header.header
  .site-container.header__container
    .header__logo.header__logo--loader(v-if="loader")

    a.header__logo(href="/", v-else)
      img(:src="$store.state.strapiURL + logo", @load="inImgLoad", alt="alt")

    LocaleSwitcher

    nav.nav.header__nav
      ul.nav__list
        li.nav__item
          nuxt-link.nav__link(:to="{path: '/', hash: 'company'}")
            | {{ setCompanyTitle }}
        li.nav__item
          nuxt-link.nav__link(:to="{path: '/', hash: 'projects'}")
            | {{ setProjectTitle }}
        li.nav__item
          nuxt-link.nav__link(:to="{path: '/', hash: 'news'}")
            | {{ setNewsTitle }}
        li.nav__item
          nuxt-link.nav__link(:to="{path: '/', hash: 'contacts'}")
            | {{ setContactsTitle }}

    button.button.header__btn(@click="openModal")
      span.button__txt
        | {{ setBtnTitle }}
    button.header__burger-btn(aria-label="Открыть меню", @click="handleMenu")
      span
      span
      span
  Menu(:openMenu="$store.state.mobileMenu")
</template>

<script>
import Nav from "@/components/UI/Nav";
import Button from "@/components/UI/Button";
import Menu from "@/components/Menu";
import LocaleSwitcher from "@/components/UI/LocaleSwitcher";

export default {
  components: {
    Nav,
    Button,
    Menu,
    LocaleSwitcher,
  },
  data() {
    return {
      btnTitle: "Связаться с нами",
      navItems: [
        { id: 1, link: "/", name: "О компании", anchor: "company" },
        { id: 2, link: "/", name: "Проекты", anchor: "projects" },
        { id: 3, link: "/", name: "Новости", anchor: "news" },
        { id: 4, link: "/", name: "Контакты", anchor: "contacts" },
      ],
      logo: "",
      loader: true,
      pageLocale: this.$i18n.locale,
      openMenu: false,
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    setBtnTitle() {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === "ru" ? "Связаться с нами" : "Contact us";
    },
    setProjectTitle() {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === "ru" ? "Проекты" : "Projects";
    },
    setCompanyTitle() {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === "ru" ? "О компании" : "Company";
    },
    setNewsTitle() {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === "ru" ? "Новости" : "News";
    },
    setContactsTitle() {
      // eslint-disable-next-line no-return-assign, vue/no-side-effects-in-computed-properties
      return this.$i18n.locale === "ru" ? "Контакты" : "Contacts";
    }
  },
  created() {
    // this.getMenuItems()
    this.getLogo();
    // this.setBtntitle()
  },
  methods: {
    inImgLoad() {
      this.loader = false;
    },
    handleMenu() {
      this.$store.commit("SET_MENU", true);
    },
    openModal() {
      this.$store.commit("SET_MODAL", true);
    },
    setBtntitle() {
      // eslint-disable-next-line no-unused-expressions
      this.btnTitle =
        this.pageLocale === "en" ? "Contact us" : "Связаться с нами";
    },
    async getMenuItems() {
      try {
        // eslint-disable-next-line quote-props
        const results = await this.$strapi.find("nav-menus", {
          locale: this.pageLocale,
        });
        this.navItems = results;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("smth is wrong", error);
      }
    },
    async getLogo() {
      // eslint-disable-next-line quote-props
      await this.$strapi
        .find("logo", { populate: "*", locale: this.pageLocale })
        .then((logoImage) => {
          this.logo = logoImage.data.attributes.logo.data.attributes.url;
          this.loader = false;
          this.$store.commit(
            "SET_LOGO",
            logoImage.data.attributes.logo.data.attributes.url
          );
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log("smth is wrong", error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/global/helpers/mixins";
@import "~@/assets/styles/global/helpers/media";

.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: 5.5rem;
  }

  &__link {
    font: var(--font-s);
    color: var(--color-white);

    &:hover {
      text-decoration: underline;
    }
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  background-color: #171a3d;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    margin-left: auto;

    @include mq(md) {
      display: none;
    }
  }

  &__btn {
    margin-left: 7rem;

    @include mq(md) {
      display: none;
    }
  }

  &__burger-btn {
    margin-left: auto;
    width: 4rem;
    height: 4rem;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      width: 100%;
      height: 0.2rem;
      background-color: var(--color-white);
      flex-shrink: 0;

      margin-bottom: 0.4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @include mq(md) {
      display: flex;
    }
  }

  &__logo {
    max-width: 13rem;
    --grey-2: var(--color-dark-blue);
    --grey-1: var(--color-dark-blue2);

    &--loader {
      width: 100%;
      height: 2.8rem;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: backgroundMovement;
      animation-timing-function: linear;
      background: var(--grey-2);
      background: linear-gradient(
        267.58deg,
        var(--grey-2) 0%,
        var(--grey-1) 80%,
        var(--grey-2) 100%
      );
      background-size: 200%;
      display: inline-block;
      width: 100%;
    }
  }

  &__locale-switcher {
    display: flex;
    align-items: center;
    margin: 0 2rem;

    &::before {
      display: inline-block;
      flex-shrink: 0;
      margin: 0 0.5rem;
      order: 2;
      content: "-";
    }
  }

  &__locale-switcher-item {
    font: var(--font-xs);
    &:nth-child(1) {
      order: 1;
    }

    &:last-child {
      order: 3;
    }

    a {
      opacity: 0.5;

      &.nuxt-link-exact-active {
        opacity: 1;
      }
    }
  }
}

@keyframes backgroundMovement {
  0% {
    background-position: 100%;
  }

  100% {
    background-position: -100%;
  }
}
</style>
