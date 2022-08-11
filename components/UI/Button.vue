<template lang="pug">
  button.button
    span.button__txt
      slot
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss">
.button {
  padding: 1.8rem 3.2rem;
  background-color: var(--color-dark);
  border-radius: 0.7rem;
  border: 1px solid var(--color-blue);
  text-align: center;
  transition: background-color var(--transition), border-color var(--transition);

  &__txt {
    display: block;
    font: var(--font-s);
    color: var(--color-white);
    transition: color var(--transition);
  }

  &:hover {
    background-color: var(--color-blue);
  }

  &--secondary {
    background-color: var(--color-blue);
    border-color: var(--color-blue);

    &:hover {
      background-color: var(--color-white);
      border-color: var(--color-white);

      .button__txt {
        color: var(--color-blue);
      }
    }
  }
}
</style>
