<template>
  <div>
    <div class="hero">
      <div class="hero-elements">
        <h3>Mois d'introduction pour seulement 50 $ !</h3>
        <p>valable 1 fois par personne</p>
        <a class="submit-button" href="https://mindbody.io/locations/ivy-espace-yoga-arts-communaute">Voir l'offre</a>
      </div>
    </div>
    <slice-zone type="page" uid="accueil" />
    <classe-jour
      :today="currentDate"
    />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import ClasseJour from '~/components/classe-du-jour.vue'

export default {
  components: {
    SliceZone,
    ClasseJour
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
.hero {
    display: grid;
    grid-template: 50% 50% / 50% 50%;
    height: 85vh;
    width: 100%;
    background-image: url(https://images.prismic.io/ivy-yoga/0e5d227e-6d0b-4eda-b1f8-feea573ac806_hero-1.jpg?auto=compress,format);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    justify-items: center;
    align-items: center;
    margin-top: -115px;
}
.hero-elements {
    grid-area: 1/1/3/3;
    max-width: 650px;
    height: fit-content;
    display: flex;
    flex-flow: column;
    align-items: center;
}
.hero-elements h3 {
    font-size: calc(1.25rem * var(--text-min-4xl));
    font-weight: bolder;
    text-align: center;
}
</style>
