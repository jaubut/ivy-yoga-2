<template>
  <div>
    <cta-text
      eye-brown=""
      url="#septembre"
      title="Ouvert !"
      description=""
      label="Réserve tes classes dès maintenant"
    />
    <carousel class="ps" :scroll-per-page="true">
      <slide v-for="day in horaire" :key="day">
        <h2>{{ day }}</h2>
        <img :src="'/horaire/' + day + '.png'" :alt="day">
      </slide>
    </carousel>
    <cta-text
      eye-brown="Horaire"
      url="/tarifs"
      title="Cours privé à partir de 12 $ /personne*"
      description="Réuni ton groupe (amis, famille ou collègues). Réserve une date et profite pleinement de ton expérience sur mesure. *Visite la page tarif pour connaître l'ensemble des options."
      label="Voir les tarifs"
    />
    <slice-zone type="page" uid="horaire" />
    <cta-text
      url="https://espaceivy.fliipapp.com"
      title="Réserver ma classe sur FLiip"
      label="Réserver"
    />
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
