<template lang="pug">
  .modal(:class="open ? 'is-active' : ''" @click.stop="closeModal")
    .modal__content(@click.stop v-scroll-lock="open")
      button.modal__close(aria-label="Закрыть модальное окно" @click="closeModal")
      .succes(:class="success ? 'isShown' : ''")
        h3.modal__heading Спасибо!
        p.modal__text
          | Ваша заявка принята!
      .initial(:class="success ? 'isHidden' : ''")
        h3.modal__heading Свяжитесь с нами
        p.modal__text
          | Оставьте ваши контактные данные, и мы свяжемся с Вами в ближайшее время
        form.modal-form(@submit.prevent="onSubmit")
          label.modal-form__label
            span.modal-form__name ФИО
            input.modal-form__input(
              name="name"
              placeholder="Иванов Иван Иванович"
              type="text"
              v-model="form.name"
              :class="$v.form.name.$error ? 'is-error' : ''"
            )
            span.form__label-error(v-if="$v.$error")
              | {{$v.$error ? nameError[0] : []}}
          label.modal-form__label
            span.modal-form__name Телефон
            input.modal-form__input(
              name="tel"
              placeholder="+7 (ХХХ) ХХХ ХХ ХХ"
              v-mask="'+7 (###) ###-##-##'"
              type="text"
              :class="$v.form.tel.$error ? 'is-error' : ''"
              v-model="form.tel"
            )
            span.form__label-error(v-if="$v.$error")
              | {{$v.$error ? telErrors[0] : []}}
          label.modal-form__label
            span.modal-form__name Почта
            input.modal-form__input(
              name="email"
              placeholder="example@mail.com"
              type="email"
              :class="$v.form.email.$error ? 'is-error' : ''"
              v-model="form.email"
            )
            span.form__label-error(v-if="$v.$error")
              | {{$v.$error ? emailErrors[0] : []}}
          span.modal-form__legend Выберете предпочтительный способ связи:
          .modal-form__radio-btns
            label.modal-form__checkbox
              input(type="radio" v-model="form.contactMeThroue" name="contact-me-throue" value="WhtasUp" class="visually-hidden")
              span.modal-form__checkbox-text
                | Whatsapp
            label.modal-form__checkbox
              input(type="radio" v-model="form.contactMeThroue" name="contact-me-throue" value="email" class="visually-hidden")
              span.modal-form__checkbox-text
                | Письмо
            label.modal-form__checkbox
              input(type="radio" v-model="form.contactMeThroue" name="contact-me-throue" value="call" checked class="visually-hidden")
              span.modal-form__checkbox-text
                | Звонок
            span.form__label-error(v-if="$v.$error")
              | {{$v.$error ? contactMeThroueErrors[0] : []}}
          Button.button--secondary.modal-form__btn
            | Отправить
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
      success: false
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
      if (!this.$v.form.name.required) { errors.push('Обязательно для заполнения.') }
      if (!this.$v.form.name.minLength) { errors.push('Не меньше двух знаков.') }
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.form.email.required) { errors.push('Обязательно для заполнения.') }
      if (!this.$v.form.email.email) { errors.push('Невалидный email.') }
      return errors
    },
    telErrors () {
      const errors = []
      if (!this.$v.form.tel.required) { errors.push('Обязательно для заполнения.') }
      if (!this.$v.form.tel.phone) { errors.push('Невалидный номер телефона.') }
      return errors
    },
    contactMeThroueErrors () {
      const errors = []
      if (!this.$v.form.contactMeThroue.required) { errors.push('Обязательно для заполнения.') }
      return errors
    }
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
