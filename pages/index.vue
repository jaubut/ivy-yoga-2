<template>
  <div>
    <hero-promo />
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
