<template lang="pug">
  .modal(:class="open ? 'is-active' : ''" @click.stop="closeModal")
    .modal__content(@click.stop v-scroll-lock="open")
      button.modal__close(aria-label="Закрыть модальное окно" @click="closeModal")
      .succes(:class="success ? 'isShown' : ''")
        h3.modal__heading Спасибо!
        p.modal__text
          | Ваша заявка принята!
      .initial(:class="success ? 'isHidden' : ''")
        h3.modal__heading
          | {{ setHeading }}
        p.modal__text
          | {{ setTextHeading }}
        form.modal-form(@submit.prevent="onSubmit")
          label.modal-form__label
            span.modal-form__name
              | {{ setFio }}
            input.modal-form__input(
              name="name"
              :placeholder="setfioPlaceHolder"
              type="text"
              v-model="form.name"
              :class="$v.form.name.$error ? 'is-error' : ''"
            )
            span.form__label-error(v-if="$v.$error")
              | {{$v.$error ? nameError[0] : []}}
          label.modal-form__label
            span.modal-form__name
              | {{ setPhoneName }}
            input.modal-form__input(
              name="tel"
              :placeholder="setPhonePlaceHolder"
              v-mask="'+7 (###) ###-##-##'"
              type="text"
              :class="$v.form.tel.$error ? 'is-error' : ''"
              v-model="form.tel"
            )
            span.form__label-error(v-if="$v.$error")
              | {{$v.$error ? telErrors[0] : []}}
          label.modal-form__label
            span.modal-form__name
              | {{ setEmailName }}
            input.modal-form__input(
              name="email"
              placeholder="example@mail.com"
              type="email"
              :class="$v.form.email.$error ? 'is-error' : ''"
              v-model="form.email"
            )
            span.form__label-error(v-if="$v.$error")
              | {{$v.$error ? emailErrors[0] : []}}
          span.modal-form__legend
            | {{ setContactMethodName }}
          .modal-form__radio-btns
            label.modal-form__checkbox
              input(type="radio" v-model="form.contactMeThroue" name="contact-me-throue" value="WhtasUp" class="visually-hidden")
              span.modal-form__checkbox-text
                | Whatsapp
            label.modal-form__checkbox
              input(type="radio" v-model="form.contactMeThroue" name="contact-me-throue" value="email" class="visually-hidden")
              span.modal-form__checkbox-text
                | {{ setEmailName }}
            label.modal-form__checkbox
              input(type="radio" v-model="form.contactMeThroue" name="contact-me-throue" value="call" checked class="visually-hidden")
              span.modal-form__checkbox-text
                | {{ setCallName }}
            span.form__label-error(v-if="$v.$error")
              | {{$v.$error ? contactMeThroueErrors[0] : []}}
          Button.button--secondary.modal-form__btn
            | {{ setBtnText }}
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, helpers } from 'vuelidate/lib/validators'

import Button from '@/components/UI/Button'

const phone = helpers.regex('phone', /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/)

export default {
  name: 'Modal',
  components: {
    Button
  },
  mixins: [validationMixin],
  props: {
    open: {
      type: Boolean
    }
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        contactMeThroue: ''
      },
      success: false,
      formName: 'Ваше имя',
      formEmail: 'Ваш e-mail',
      formTel: 'Ваш телефон',
      formText: 'Сообщение',
      formBtnText: 'Отправить',
      pageLocale: this.$i18n.locale,
      errorText: 'Обязательно для заполнения.',
      errorTextEmail: 'Невалидный email.',
      errorTextName: 'Не меньше двух знаков.',
      errorTextPhone: 'Невалидный номер телефона.'
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      tel: {
        required,
        phone
      },
      contactMeThroue: {
        required
      }
    }
  },
  computed: {
    nameError () {
      const errors = []
      if (!this.$v.form.name.required) { errors.push(this.$i18n.locale === "ru" ? "Обязательно для заполнения" : "Required field") }
      if (!this.$v.form.name.minLength) { errors.push(this.$i18n.locale === "ru" ? "Не меньше двух знаков." : "At least two characters") }
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.form.email.required) { errors.push(this.$i18n.locale === "ru" ? "Обязательно для заполнения" : "Required field") }
      if (!this.$v.form.email.email) { errors.push(this.$i18n.locale === "ru" ? "Невалидный email." : "Invalid Email") }
      return errors
    },
    telErrors () {
      const errors = []
      if (!this.$v.form.tel.required) { errors.push(this.$i18n.locale === "ru" ? "Обязательно для заполнения" : "Required field") }
      if (!this.$v.form.tel.phone) { errors.push(this.$i18n.locale === "ru" ? "Невалидный номер телефона" : "Invalid phone number") }
      return errors
    },
    contactMeThroueErrors () {
      const errors = []
      if (!this.$v.form.contactMeThroue.required) { errors.push(this.$i18n.locale === "ru" ? "Обязательно для заполнения" : "Required field") }
      return errors
    },
    setHeading () {
      return this.$i18n.locale === "ru" ? "Свяжитесь с нами" : "Contact us";
    },
    setTextHeading () {
      return this.$i18n.locale === "ru" ? "Оставьте ваши контактные данные, и мы свяжемся с Вами в ближайшее время" : "Leave your contact details and we will contact you as soon as possible";
    },
    setFio () {
      return this.$i18n.locale === "ru" ? "ФИО" : "Name";
    },
    setfioPlaceHolder () {
      return this.$i18n.locale === "ru" ? "Ваше имя" : "Your name";
    },
    setPhoneName () {
      return this.$i18n.locale === "ru" ? "Ваш телефон" : "Phone";
    },
    setPhonePlaceHolder () {
      return this.$i18n.locale === "ru" ? "Ваш телефон" : "Your Phone";
    },
    setEmailName () {
      return this.$i18n.locale === "ru" ? "Почта" : "Email";
    },
    setContactMethodName () {
      return this.$i18n.locale === "ru" ? "Выберете предпочтительный способ связи:" : "Choose your preferred contact method:";
    },
    setCallName () {
      return this.$i18n.locale === "ru" ? "Звонок" : "Call";
    },
    setBtnText () {
      return this.$i18n.locale === "ru" ? "Отправить" : "Send";
    }
  },
  created () {
    this.setInfo()
  },
  methods: {
    closeModal () {
      this.$store.commit('SET_MODAL', false)
      this.success = false
      this.form.name = ''
      this.form.email = ''
      this.form.tel = ''
    },
    async onSubmit () {
      this.$v.form.$touch()

      if (!this.$v.form.$error) {
        await this.$axios.post('/api/message', this.form)
          .then((res) => {
            this.success = true
            this.name = ''
            this.email = ''
            this.tel = ''
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    setInfo () {
      this.formName = this.pageLocale === 'en' ? 'Name' : 'Ваше имя'
      this.formEmail = this.pageLocale === 'en' ? 'Email' : 'Ваш e-mail'
      this.formTel = this.pageLocale === 'en' ? 'Phone' : 'Ваш телефон'
      this.formText = this.pageLocale === 'en' ? 'Message' : 'Сообщение'
      this.formBtnText = this.pageLocale === 'en' ? 'Send' : 'Отправить'
      this.errorTextPhone = this.pageLocale === 'en' ? 'Invalid phone number' : 'Невалидный номер телефона'
      this.errorTextName = this.pageLocale === 'en' ? 'At least two characters' : 'Не меньше двух знаков.'
      this.errorTextEmail = this.pageLocale === 'en' ? 'Invalid Email' : 'Невалидный email.'
      this.errorText = this.pageLocale === 'en' ? 'Required field' : 'Обязательно для заполнения.'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/global/helpers/mixins';
  @import '~@/assets/styles/global/helpers/media';

  .initial {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.isHidden {
      display: none !important;
    }
  }

  .succes {
    display: none;

    &.isShown {
      display: flex;
      flex-direction: column;
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #11132D, $alpha: 0.7);
    overflow: auto;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--taransition), visibility var(--tarnsition);

    &.is-active {
      opacity: 1;
      visibility: visible;
    }

    @include mq(md) {
      overflow: hidden;
    }

    &__close {
      position: absolute;
      top: 4rem;
      right: 4rem;
      width: 2.2rem;
      height: 2.2rem;

      @include mq(sm) {
        top: 2.6rem;
        right: 2.6rem;
      }

      &:hover {
        &::before,
        &::after {
          background-color: var(--color-blue-btn);
        }
      }

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 100%;
        height: 0.2rem;
        background-color: var(--color-blue);
        transform: translate(-50%, -50%);
        transition: background-color var(--tarnsition);
        content: "";
      }

      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    &__content {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 10;
      transform: translate(-50%, -50%);
      max-width: 131.2rem;
      width: 100%;
      background-color: var(--color-white);
      border-radius: 1.2rem;
      padding: 7.1rem;
      display: flex;
      flex-direction: column;
      color: var(--color-dark);

      @include mq(lg) {
        max-width: 95%;
      }

      @include mq(md) {
        max-width: 100%;
        height: 100%;
        border-radius: 0;
        overflow: auto;
        padding: 9.1rem 2.2rem;
      }
    }

    &__heading {
      font: var(--font-l-mobile);
      text-align: center;
      margin-bottom: 1.4rem;

      @include mq(sm) {
        margin-bottom: 1.9rem;
      }
    }

    &__text {
      text-align: center;
      max-width: 46.2rem;
      align-self: center;
      font: var(--font-m-mobile);
      font-weight: 400;
      margin-bottom: 3.5rem;

      @include mq(sm) {
        font: var(--font-xs);
      }
    }
  }

  .modal-form {
    margin: 0 auto;
    max-width: 77.6rem;
    width: 100%;

    &__label {
      position: relative;
      display: block;
      width: 100%;
      margin-bottom: 2.4rem;

      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }

      @include mq(sm) {
        margin-bottom: 2.8rem;
      }
    }

    &__name {
      display: block;
      font-weight: 500;
      margin-bottom: 0.8rem;

      @include mq(sm) {
        font: var(--font-xs-mobile);
      }
    }

    &__input {
      padding: 1.4rem 2.8rem;
      width: 100%;
      height: 4.8rem;
      border: 1px solid var(--color-dark-blue2);
      border-radius: 0.8rem;
      font: var(--font-s);

      @include mq(sm) {
        font: var(--font-xs-mobile);
        padding: 1.2rem 2.2rem;
        border-radius: 0.6rem;

        @include placeholder() {
          font: var(--font-xs-mobile);
        }
      }

      @include placeholder() {
        font: var(--font-s);
        font-weight: 400;
        color: #848592;
      }
    }

    &__btn {
      margin-top: 7.2rem;

      @include mq(sm) {
        margin-top: 4rem;
        width: 100%;
        justify-content: center;
      }
    }

    &__legend {
      font: var(--font-m-mobile);
      font-weight: 500;
      display: block;
      margin-bottom: 1.8rem;
      margin-top: 4.5rem;

      @include mq(sm) {
        margin-top: 3.4rem;
        margin-bottom: 2.4rem;
      }
    }

    &__radio-btns {
      display: flex;
      align-items: center;
      gap: 5.5rem;

      @include mq(sm) {
        gap: 1.8rem;
        flex-direction: column;
        align-items: flex-start;
      }
    }

    &__checkbox {
      position: relative;
      display: block;
      cursor: pointer;

      input:checked {
        ~ .modal-form__checkbox-text {
          &::after {
            opacity: 1;
          }
        }
      }

      &:hover {
        .modal-form__checkbox-text {
          color: #848592;
        }
      }
    }

    &__checkbox-text {
      position: relative;
      display: block;
      font: var(--font-m);
      font-weight: 500;
      padding-left: 3rem;

      &::before {
        position: absolute;
        top: 0.1rem;
        left: 0;
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 0.4rem;
        border: 1px solid #848592;
        content: "";
      }

      &::after {
        position: absolute;
        top: 0.5rem;
        left: 0.4rem;
        width: 1.4rem;
        height: 1.4rem;
        background-color: var(--color-blue);
        border-radius: 0.2rem;
        opacity: 0;
        content: "";
      }

      @include mq(sm) {
        font: var(--font-xs-mobile);
        padding-left: 2.6rem;

        &::before {
          top: -0.2rem;
          width: 1.8rem;
          height: 1.8rem;
        }

        &::after {
          top: 0.1rem;
          left: 0.3rem;
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  }
</style>
