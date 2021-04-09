<template>
  <div>
    <hero-promo
      url="https://images.prismic.io/ivy-yoga/ebb2f599-67bf-4937-8d8d-d1b8d5093e1a_cours+en+ligne.jpg?auto=compress,format"
      title="Réserver vos cours privés et semi-privés dès maintenant !"
      description=""
      ctaurl="tel:5149149859"
      cta="Contacte-nous"
    />
    <slice-zone type="page" uid="tarifs1" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import heroPromo from '~/components/hero.vue'

export default {
  components: {
    SliceZone,
    heroPromo
  }
}
</script>

<style>
.ps-cta {
    background: var(--color-grey-90);
}

</style>
