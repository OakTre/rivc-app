<template lang="pug">
form.form(@submit.prevent="onSubmit")
  .form__container
    label.form__label
      input.form__input(
        name="name"
        placeholder="Ваше имя"
        v-model="form.name"
        :class="$v.form.name.$error ? 'is-error' : ''")
      span.form__label-error(v-if="$v.$error")
        | {{$v.$error ? nameError[0] : []}}
    label.form__label
      input.form__input(
        name="tel"
        v-mask="'+7 (###) ###-##-##'"
        placeholder="Ваш телефон"
        :class="$v.form.tel.$error ? 'is-error' : ''"
        v-model="form.tel"
      )
      span.form__label-error(v-if="$v.$error")
        | {{$v.$error ? telErrors[0] : []}}
    label.form__label
      input.form__input(
        name="email"
        placeholder="Ваш e-mail"
        :class="$v.form.email.$error ? 'is-error' : ''"
        v-model="form.email"
      )
      span.form__label-error(v-if="$v.$error")
        | {{$v.$error ? emailErrors[0] : []}}
    label.form__label.form__label--big
      textarea.form__textarea(name="text" placeholder="Сообщение")
    Button.form__btn._mobile.button--secondary
      | Отправить
  Button.form__btn.button--secondary
    | Отправить
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, helpers } from 'vuelidate/lib/validators'

import Button from '@/components/UI/Button'

const phone = helpers.regex('phone', /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/)

export default {
  name: 'FooterForm',
  components: {
    Button
  },
  mixins: [validationMixin],
  data () {
    return {
      form: {
        name: '',
        email: '',
        tel: ''
      }
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
    }
  },
  methods: {
    onSubmit () {
      this.$v.form.$touch()

      if (!this.$v.form.$error) {
        console.log(JSON.stringify(this.form))
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/global/helpers/mixins.scss";
@import '~@/assets/styles/global/helpers/media';

.form {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__container {
    background: var(--gradient-argo);
    padding: 6rem;
    border-radius: 1.2rem;

    @include mq(sm) {
      padding: 6.6rem 2.3rem;
    }
  }

  &__label {
    position: relative;
    display: block;
    width: 100%;
    height: 2.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.63);
    margin-bottom: 4.2rem;

    &--big {
      height: 4rem;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }

  &__input,
  &__textarea {
    padding: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 0.8rem;
    font: var(--font-xs);
    color: rgba($color: #fff, $alpha: 0.6);

    @include placeholder() {
      font: var(--font-xs);
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }

  &__btn {
    align-self: flex-end;
    margin-top: 4.4rem;
    padding: 1.8rem 6.1rem;

     @include mq(sm) {
      display: none;
     }

    &._mobile {
      display: none;

      @include mq(sm) {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }

  &__label-error {
    color: red;
    display: block;
    font: var(--font-xs);
  }
}
</style>
