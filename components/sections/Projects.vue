<template lang="pug">
section.section.projects(id="projects")
  .site-container.projects__container.site-top-line
    h2.site-heading {{ title }}
    ul.projects__list.grid-container
      button.projects__item(
        @click="openAgroModal"
      )
        h3.projects__item-headding(v-if="firstProject.data")
          | {{ firstProject.data.attributes.Name }}
      button.projects__item(
        @click="openAPKModal"
      )
        h3.projects__item-headding(v-if="secondProject.data")
          | {{ secondProject.data.attributes.Name }}
      button.projects__item(
        @click="openAutoModal"
      )
        h3.projects__item-headding(v-if="projectThird.data")
          | {{ projectThird.data.attributes.Name }}
      button.projects__item(
        @click="openKDWModal"
      )
        h3.projects__item-headding(v-if="projectFour.data")
          | {{ projectFour.data.attributes.Name }}

  ModalComponent(:open="$store.state.modalComponent" v-if="firstProject.data")
    IncludePage(
      :title="firstProject.data.attributes.Heading"
      :text="firstProject.data.attributes.SubHeading"
      :img="$store.state.strapiURL + firstProject.data.attributes.Image.data.attributes.url"
      link="https://agropoliya.ru/"
      btnClass="button--secondary"
      class="agro-section"
      :btnText="btnTitle"
    )
      .div
        .div(v-html="firstProject.data.attributes.Description")

      .agro-section__feautures
        .div(v-html="firstProject.data.attributes.Feautures")

  ModalComponent(:open="$store.state.modalComponentApk" v-if="secondProject.data")
    IncludePage(
      :title="secondProject.data.attributes.Heading"
      :img="$store.state.strapiURL + secondProject.data.attributes.Image.data.attributes.url"
      link="https://edu.agropoliya.ru/"
      btnClass="apk-section__btn"
      class="apk-section"
      :btnText="btnTitle"
    )
      .apk-section__list(v-html="secondProject.data.attributes.List")
      .apk-section__feautures(v-html="secondProject.data.attributes.Feautures")
      .apk-section__list(v-html="secondProject.data.attributes.List2")
  ModalComponent(:open="$store.state.modalComponentAuto" v-if="projectThird.data")
    IncludePage(
      :title="projectThird.data.attributes.Heading"
      :text="projectThird.data.attributes.SubHeading"
      :img="$store.state.strapiURL + projectThird.data.attributes.Image.data.attributes.url"
      link="https://drive.google.com/file/d/1ErAeIk1toNvUA-H2-Gz10IQz3dTLmMJo/view"
      link2=true
      btnClass="SHTP-section__btn"
      :btnText="btnTextPresent"
      :link2Text="btnTextSendReq"
      class="SHTP-section"
    )
      .SHTP-section__list(v-html="projectThird.data.attributes.Feautures")

  ModalComponent(:open="$store.state.modalComponentKDW" v-if="projectFour.data")
    IncludePage(
      :title="projectFour.data.attributes.Heading"
      :text="projectFour.data.attributes.SubHeading"
      :img="$store.state.strapiURL + projectFour.data.attributes.Image.data.attributes.url"
      link="https://kdw-agro.com/"
      btnClass="KDW-section__btn"
      class="KDW-section"
      :btnText="btnTitle"
    )
      .KDW-section__info(v-html="projectFour.data.attributes.Descr")
        span.KDW-section__legend-small Международный форум
        span.KDW-section__legend-big 21-24 сентября
        span.KDW-section__legend-small Выставочный центр «Казань Экспо», г. Казань

      .KDW-section__feautures(v-html="projectFour.data.attributes.Feautures")
      .KDW-section__list(v-html="projectFour.data.attributes.List")
</template>

<script>
export default {
  name: 'ProjectSection',
  data () {
    return {
      argoModal: false,
      title: 'Проекты',
      list: [
        'Аналитика на основе корректных данных',
        'Единая система сбора и хранения данных по всем направлениям',
        'Автоматическая передача данных в другие ГИС',
        'Прозрачность статистики',
        'Возможность упрощенной подачи документов на субсидии'
      ],
      pageLocale: this.$i18n.locale,
      firstProject: [],
      secondProject: [],
      projectThird: [],
      projectFour: [],
      btnTitle: 'Перейти на сайт',
      btnTextPresent: 'Презентация',
      btnTextSendReq: 'Подать заявку'
    }
  },
  created () {
    this.setTitle()
    this.getProjectFirst()
    this.getSecondFirst()
    this.getThirdProject()
    this.getFourProject()
  },
  methods: {
    openAgroModal () {
      this.$store.commit('SET_MODAL_COMPONENT', true)
    },
    openAPKModal () {
      this.$store.commit('SET_MODAL_COMPONENT_APK', true)
    },
    openAutoModal () {
      this.$store.commit('SET_MODAL_COMPONENT_AUTO', true)
    },
    openKDWModal () {
      this.$store.commit('SET_MODAL_COMPONENT_KDW', true)
    },
    setTitle () {
      this.title = this.pageLocale === 'en' ? 'Projects' : 'Проекты'
      this.btnTitle = this.pageLocale === 'en' ? 'Website' : 'Перейти на сайт'
      this.btnTextPresent = this.pageLocale === 'en' ? 'Presentation' : 'Презентация'
      this.btnTextSendReq = this.pageLocale === 'en' ? 'Send request' : 'Подать заявку'
    },
    async getProjectFirst () {
      try {
        // eslint-disable-next-line quote-props
        await this.$strapi.find('first-project', { populate: '*', locale: this.pageLocale }).then((result) => {
          this.firstProject = result
          // this.$store.commit('SET_FIRST_PROJECT', result.data)
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('smth is wrong', error)
      }
    },
    async getSecondFirst () {
      try {
        // eslint-disable-next-line quote-props
        await this.$strapi.find('project-second', { populate: '*', locale: this.pageLocale }).then((result) => {
          this.secondProject = result
          // this.$store.commit('SET_FIRST_PROJECT', result.data)
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('smth is wrong', error)
      }
    },
    async getThirdProject () {
      try {
        // eslint-disable-next-line quote-props
        await this.$strapi.find('project-third', { populate: '*', locale: this.pageLocale }).then((result) => {
          this.projectThird = result
          // this.$store.commit('SET_FIRST_PROJECT', result.data)
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('smth is wrong', error)
      }
    },
    async getFourProject () {
      try {
        // eslint-disable-next-line quote-props
        await this.$strapi.find('project-four', { populate: '*', locale: this.pageLocale }).then((result) => {
          this.projectFour = result
          // this.$store.commit('SET_FIRST_PROJECT', result.data)
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('smth is wrong', error)
      }
    }
  }
}
</script>

<style lang="scss">
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
    text-align: left;

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

.KDW-section {
  background: var(--gradient-kdw);

  .include-page__image {
    width: 54rem;

    @include mq(md) {
      height: auto;
    }
  }

  &__list {
    ul {
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

      li {
        grid-column: 3 span;

        p {
          &:nth-child(1) {
            display: block;
            font-weight: 700;
            margin-bottom: 0.4rem;

            @include mq(sm) {
              font: var(--font-xs);
              margin-bottom: 0;
            }
          }

          &:nth-child(2) {
            display: block;

            @include mq(sm) {
              font: var(--font-xs);
              line-height: 1;
            }
          }
        }

        @include mq(sm) {
          grid-column: 6 span;
        }
      }
    }
  }

  &__info {
    p {
      font-weight: 700;
      margin-bottom: 0.8rem;
    }

    h4 {
      font: var(--font-l);
      display: block;
      line-height: 1;

      @include mq(sm) {
        font: var(--font-xs);
        font-weight: 700;
      }
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
      background-color: var(--color-white);
      border-color: var(--color-white);
      color: var(--color-blue);
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

.SHTP-section {
  flex-direction: column;
  align-items: flex-start;
  background: var(--gradient-avto);

  &__list {
    align-self: stretch;

    ul {
      align-self: stretch;

      li {
        position: relative;
        padding: 4.3rem 2.4rem;
        display: flex;
        align-items: center;
        margin-bottom: 0.4rem;

        p {
          &:nth-child(1) {
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

          &:nth-child(2) {
            font-weight: 700;
            display: block;
            max-width: 50rem;

            @include mq(sm) {
              font: var(--font-xs);
              br {
                display: none;
              }
            }
          }
        }

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
    }
  }

  &__btn {
    background-color: var(--color-purple-btn);
    border-color: var(--color-purple-btn);

    &:hover {
      background-color: var(--color-white);
      border-color: var(--color-white);
      color: var(--color-pink-btn);
    }
  }

  .include-page__btn-wrapper {
    margin-top: 6rem;

    @include mq(sm) {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  .button {
    margin-top: 0;
  }
}

.apk-section {
  background: var(--gradient-kval);

  &__list {
    margin-bottom: 2.2rem;

    ul {
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

      li {
        grid-column: 2 span;

        @include mq(sm) {
          grid-column: 3 span;
        }

        p {
          &:nth-child(1) {
            display: block;
            font: var(--font-l);
            margin-bottom: 0.6rem;

            @include mq(sm) {
              font: var(--font-xs);
              font-weight: 700;
              margin-bottom: 0;
            }
          }

          &:nth-child(2) {
            display: block;
            max-width: 24.3rem;

            @include mq(sm) {
              font: var(--font-xs);
              line-height: 1;
              max-width: 11.2rem;
            }
          }
        }
      }
    }


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
      background-color: var(--color-white);
      border-color: var(--color-white);
      color: var(--color-purple-btn);
    }

    @include mq(md) {
      margin-top: 0;
    }
  }
}

.agro-section{
  background: var(--gradient-argo);

  h3 {
    margin-bottom: 0.6rem;
    font-weight: 700;

    @include mq(sm) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }

  p {
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

    p {
      font-weight: 700;
      margin-bottom: 0.6rem;
    }

    ul {
      li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 0.5rem;

        p {
          font-weight: 400;
        }

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
}
</style>
