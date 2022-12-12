<template lang="pug">
form.form(@submit.prevent="onSubmit")
  .form__container
    .succes(:class="success ? 'isShown' : ''")
      span.succes__heading
        | Спасибо за запрос!
      p.succes__text
        | Мы свяжемся с вами как можно скорее
    .initial(:class="success ? 'isHidden' : ''")
      label.form__label
        input.form__input(
          name="name"
          :placeholder="formName"
          v-model="form.name"
          :class="$v.form.name.$error ? 'is-error' : ''")
        span.form__label-error(v-if="$v.$error")
          | {{$v.$error ? nameError[0] : []}}
      label.form__label
        input.form__input(
          name="tel"
          v-mask="'+7 (###) ###-##-##'"
          :placeholder="formTel"
          :class="$v.form.tel.$error ? 'is-error' : ''"
          v-model="form.tel"
        )
        span.form__label-error(v-if="$v.$error")
          | {{$v.$error ? telErrors[0] : []}}
      label.form__label
        input.form__input(
          name="email"
          :placeholder="formEmail"
          :class="$v.form.email.$error ? 'is-error' : ''"
          v-model="form.email"
        )
        span.form__label-error(v-if="$v.$error")
          | {{$v.$error ? emailErrors[0] : []}}
      label.form__label.form__label--big
        textarea.form__textarea(name="text" :placeholder="formText")
      Button.form__btn._mobile.button--secondary(:disabled="success ? true : false")
        | {{ formBtnText }}
  Button.form__btn.button--secondary(:disabled="success ? true : false")
    | {{ formBtnText }}
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
      }
    }
  },
  computed: {
    nameError () {
      const errors = []
      if (!this.$v.form.name.required) { errors.push(this.errorText) }
      if (!this.$v.form.name.minLength) { errors.push(this.errorTextName) }
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.form.email.required) { errors.push(this.errorText) }
      if (!this.$v.form.email.email) { errors.push(this.errorTextEmail) }
      return errors
    },
    telErrors () {
      const errors = []
      if (!this.$v.form.tel.required) { errors.push(this.errorText) }
      if (!this.$v.form.tel.phone) { errors.push(this.errorTextPhone) }
      return errors
    }
  },
  created () {
    this.setInfo()
  },
  methods: {
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
            // eslint-disable-next-line no-console
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
    min-height: 36rem;

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

.initial {
  &.isHidden {
    display: none !important;
  }
}

.succes {
  display: none;

  &.isShown {
    display: block;
  }

  &__heading {
    display: block;
    font: var(--font-m);
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
  }

  &__text {
    font: var(--font-m);
    text-align: center;
  }
}
</style>
