<template lang="pug">
section.section.contact-us
  ._layer
  .site-container.contact-us__container
    h2.site-heading.contact-us__heading
      | Обратная связь
    .grid-container
      .contact-us__block
        h3.contact-us__legend Контакты
        .contact-us__links
          a.contact-us__link(href="tel:+78005555555")
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.88547 0.51017C2.06045 0.335459 2.27055 0.199929 2.50187 0.11256C2.73318 0.025192 2.98043 -0.012019 3.22721 0.00339321C3.47399 0.0188054 3.71469 0.0864889 3.93333 0.201958C4.15198 0.317428 4.34359 0.478046 4.49547 0.67317L6.29047 2.97917C6.61947 3.40217 6.73547 3.95317 6.60547 4.47317L6.05847 6.66317C6.03019 6.7766 6.03172 6.89541 6.06291 7.00808C6.0941 7.12075 6.15388 7.22343 6.23647 7.30617L8.69347 9.76317C8.77631 9.84592 8.87916 9.90581 8.99202 9.93701C9.10488 9.9682 9.22389 9.96964 9.33747 9.94117L11.5265 9.39417C11.7831 9.33001 12.0509 9.32503 12.3098 9.3796C12.5686 9.43417 12.8116 9.54687 13.0205 9.70917L15.3265 11.5032C16.1555 12.1482 16.2315 13.3732 15.4895 14.1142L14.4555 15.1482C13.7155 15.8882 12.6095 16.2132 11.5785 15.8502C8.93965 14.9217 6.54374 13.411 4.56847 11.4302C2.58776 9.45519 1.07708 7.05963 0.148471 4.42117C-0.213529 3.39117 0.111471 2.28417 0.851471 1.54417L1.88547 0.51017Z" fill="#2966FF"/>
            </svg>
            | 8 800 555 55 55
          a.contact-us__link(href="mailto:rivc@tatar.ru")
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3.373V10.5C16 11.163 15.7366 11.7989 15.2678 12.2678C14.7989 12.7366 14.163 13 13.5 13H2.5C1.83696 13 1.20107 12.7366 0.732233 12.2678C0.263392 11.7989 0 11.163 0 10.5V3.373L7.746 7.931C7.82295 7.97638 7.91066 8.00032 8 8.00032C8.08934 8.00032 8.17705 7.97638 8.254 7.931L16 3.373ZM13.5 3.09527e-08C14.1151 -9.6716e-05 14.7087 0.226607 15.1672 0.63674C15.6257 1.04687 15.9168 1.61164 15.985 2.223L8 6.92L0.0150001 2.223C0.0831583 1.61164 0.374324 1.04687 0.832795 0.63674C1.29127 0.226607 1.88485 -9.6716e-05 2.5 3.09527e-08H13.5Z" fill="#2966FF"/>
            </svg>
            | rivc@tatar.ru
          p.contact-us__link
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18.0035C5.73694 16.9261 4.56619 15.745 3.5 14.4725C1.9 12.5615 8.78894e-07 9.71551 8.78894e-07 7.00351C-0.00069302 5.61847 0.409509 4.26436 1.17869 3.11254C1.94788 1.96072 3.04147 1.06297 4.32107 0.532908C5.60067 0.00284672 7.00875 -0.1357 8.36712 0.134802C9.72548 0.405303 10.9731 1.07269 11.952 2.05251C12.6038 2.70137 13.1203 3.47305 13.4719 4.32288C13.8234 5.17272 14.0029 6.08384 14 7.00351C14 9.71551 12.1 12.5615 10.5 14.4725C9.4338 15.745 8.26306 16.9261 7 18.0035ZM7 4.00351C6.20435 4.00351 5.44129 4.31958 4.87868 4.88219C4.31607 5.4448 4 6.20786 4 7.00351C4 7.79916 4.31607 8.56222 4.87868 9.12483C5.44129 9.68744 6.20435 10.0035 7 10.0035C7.79565 10.0035 8.55871 9.68744 9.12132 9.12483C9.68393 8.56222 10 7.79916 10 7.00351C10 6.20786 9.68393 5.4448 9.12132 4.88219C8.55871 4.31958 7.79565 4.00351 7 4.00351Z" fill="#2966FF"/>
            </svg>
            | г. Казань, ул. Федосеевская, 36
        Socials.contact-us__socials
      .contact-us__block
        Form.contact-us__form
</template>
<script>
import Socials from '@/components/UI/Socials'
import Form from '@/components/UI/Form'

export default {
  components: {
    Socials,
    Form
  }
}
</script>
<style lang="scss" scoped>
.contact-us {
  position: relative;

  ._layer {
    position: absolute;
    right: -30rem;
    bottom: 0;
    width: 131.5rem;
    height: 40rem;
    background: url("~@/assets/img/bg-form.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    filter: blur(210px);
  }

  &__container {
    position: relative;
    padding-top: 6.5rem;

    &::before {
      position: absolute;
      top: 0;
      left: var(--content-padding);
      max-width: 33.5rem;
      width: 100%;
      height: 1px;
      background: var(--gradient-bg);
      content: "";
    }
  }

  &__block {
    grid-column: 6 span;

    &:nth-child(1) {
      display: flex;
      flex-direction: column;
    }
  }

  &__legend {
    font: var(--font-l);
    margin-bottom: 3.2rem;
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.1rem;
    margin-bottom: 2rem;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  &__socials {
    margin-top: auto;
  }
}
</style>
