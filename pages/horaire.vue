<template>
  <div>
    <center-text
      eye-brown="Horaire"
      title="Des classes tous les jours"
      description="Pour tous les goûts"
    />
    <carousel class="ps" :scroll-per-page="true" :per-page-custom="[[320, 1], [1199, 4]]">
      <slide v-for="day in horaire" :key="day">
        <h2>{{ day }}</h2>
        <img :src="'/horaire/' + day + '.png'" :alt="day">
      </slide>
    </carousel>
    <slice-zone type="page" uid="horaire" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import CenterText from '~/components/text-center.vue'

export default {
  components: {
    SliceZone,
    CenterText
  },
  data () {
    return {
      horaire: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    }
  }
}
</script>

<style scoped>
.VueCarousel-slide {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: fit-content;
  background: var(--color--secondary);
  border-radius: 8px;
  margin: 0.5em;
  padding: 0.5em;
}
.VueCarousel-inner {
  flex-basis: auto !important;
}
@media (min-width: 999px) {
  .VueCarousel-slide {
    max-width: 350px;
    padding: 2em;
  }
}
</style>
