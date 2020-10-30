<template>
  <section class="grid-classe">
    <prismic-image :field="slice.primary.image" class="ps__img" />
    <prismic-rich-text :field="slice.primary.title" class="ps__title" />
    <prismic-rich-text :field="slice.primary.description" class="desc" />
    <a class="ps-button ps-button--primary" href="https://mindbody.io/locations/ivy-espace-yoga-arts-communaute" target="_blank">Réserver</a>
  </section>
</template>
<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.grid-classe {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  height: auto;
  max-width: 500px;
  padding: 50px;
  margin: 0;
}
a {
  color: #111;
}
.title {
  margin-bottom: 1em;
}
</style>
