<template>
  <div>
    <cta-text
      class="ps-cta-gray"
      eye-brown="Bouger en nature"
      url="https://www.facebook.com/espaceivy.ca"
      title="Réouverture potentielle le 14 juin !🤞🏼"
      description="D'ici là, viens respirer et bouger en conscience avec nous en nature: à Granby au parc Daniel Johnson (derrière le chalet des patineurs). Bromont à venir!"
      label="Prochain cours gratuit affiché sur Facebook"
    />
    <cta-text
      eye-brown="Horaire"
      url="mailto:info@espaceivy.ca"
      title="Cours privé & semi-privé"
      description="Offre toi un accompagnement sur mesure pour évoluer à ton rythme ! En solo, en dyade ou avec les occupants d’une même résidence privée."
      label="Prend ton rendez-vous par courriel"
    />
    <!--
    <div class="ps__head video-teaser-div">
      <video class="ps video-teaser" controls src="https://prismic-io.s3.amazonaws.com/ivy-yoga/1184fa1d-e870-4dda-ae76-16a94f8101e7_teaser-cours-en-ligne.mp4" />
    </div>
    <carousel class="ps" :scroll-per-page="true" :per-page-custom="[[320, 1], [1199, 4]]">
      <slide v-for="day in horaire" :key="day">
        <h2>{{ day }}</h2>
        <img :src="'/horaire/' + day + '.png'" :alt="day">
      </slide>
    </carousel>
    -->
    <slice-zone type="page" uid="horaire" />
    <!--
    <cta-text
      url="https://mindbody.io/locations/ivy-espace-yoga-arts-communaute"
      title="Réserver ma classe sur MINDBODY"
      label="Réserver"
    />
    -->
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import CtaText from '~/components/cta-center.vue'

export default {
  components: {
    SliceZone,
    CtaText
  },
  data () {
    return {
      horaire: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
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
.ps-cta-gray {
  background: var(--color-grey-90) !important;
}
@media (min-width: 999px) {
  .VueCarousel-slide {
    max-width: 350px;
    padding: 2em;
  }
}
@media (max-width: 500px) {
  .video-teaser {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .video-teaser-div {
    display: flex;
    align-items: center;
    align-content: center;
    flex-flow: column;
  }
}
</style>
