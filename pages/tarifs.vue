<template>
  <div>
    <hero-promo
      url="https://images.prismic.io/ivy-yoga/ebb2f599-67bf-4937-8d8d-d1b8d5093e1a_cours+en+ligne.jpg?auto=compress,format"
      title="Yoga virtuel"
      description="Durant la période en Zone Rouge, nous continuons de yogater en ligne. Viens nous rejoindre dès maintenant !"
      ctaurl="https://clients.mindbodyonline.com/classic/ws?studioid=431828&stype=43&prodid=100068"
      cta="Accède à plus de 120 classes"
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
