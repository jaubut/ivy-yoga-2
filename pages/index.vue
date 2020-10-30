<template>
  <div>
    <hero-promo />
    <slice-zone type="page" uid="accueil" />
    <classe-jour
      :today="currentDate"
    />
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
  },
  computed: {
    currentDate () {
      const today = new Date()
      return today.toLocaleString('fr-ca', { weekday: 'long' })
    }
  }
}
</script>

<style scoped>

</style>
