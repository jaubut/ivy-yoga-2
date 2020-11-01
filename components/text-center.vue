<template>
  <div class="container-text">
    <p class="eye-brown">
      {{ eyeBrown }}
    </p>
    <h1>{{ title }}</h1>
    <div class="ps__desc">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextCenter',
  props: {
    eyeBrown: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.container-text {
    display: flex;
    height: fit-content;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: calc(100vw - var(--scrollbar));
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 8vw;
    text-align: center;
}
.eye-brown {
    color: var(--color--primary);
    font-size: xxx-large;
}
</style>
