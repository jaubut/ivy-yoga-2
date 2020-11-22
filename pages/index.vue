<template>
  <div>
    <hero-promo
      url="https://images.prismic.io/ivy-yoga/0e5d227e-6d0b-4eda-b1f8-feea573ac806_hero-1.jpg?auto=compress,format"
      title="Durant la période en Zone Rouge, nous continuons de yogater en ligne !"
      description=""
      ctaurl="/tarifs"
      cta="En savoir plus"
    />
    <slice-zone type="page" uid="accueil" />
    <classe-jour />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import ClasseJour from '~/components/classe-du-jour.vue'
import heroPromo from '~/components/hero.vue'

export default {
  components: {
    SliceZone,
    ClasseJour,
    heroPromo
  }
}
</script>

<style scoped>
</style>
