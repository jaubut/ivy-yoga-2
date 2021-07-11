<template>
  <div class="hero" :style="'background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.05)), url(' + url + ');'">
    <div class="hero-elements">
      <h3>{{ title }}<br>{{ title2 }}</h3>
      <p>{{ description }}</p>
      <a class="ps-button ps-button--primary" :href="ctaurl">{{ cta }}</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    url: {
      type: String,
      default: 'https://images.prismic.io/ivy-yoga/0e5d227e-6d0b-4eda-b1f8-feea573ac806_hero-1.jpg?auto=compress,format'
    },
    title: {
      type: String,
      default: "Promo mois d'introduction pour seulement 50 $ !"
    },
    title2: {
      type: String,
      default: "Promo mois d'introduction pour seulement 50 $ !"
    },
    description: {
      type: String,
      default: 'Pour les nouveaux chez Ivy'
    },
    cta: {
      type: String,
      default: "Bénéficier de l'offre"
    },
    ctaurl: {
      type: String,
      default: 'https://mindbody.io/locations/ivy-espace-yoga-arts-communaute'
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
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    justify-items: center;
    align-items: center;
    margin-top: -165px;
}
.hero-elements {
    grid-area: 1/1/3/3;
    max-width: 650px;
    height: fit-content;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
}
.hero-elements h3 {
    font-size: calc(1.25rem * var(--text-min-4xl));
    font-weight: bolder;
    text-align: center;
    margin-bottom: 0em;
}
.hero-elements p {
  color: black;
  font-weight: bold;
}
@media (max-width: 999px) {
  .hero {
    margin-top: -115px;
    background-attachment: scroll;
    align-items: flex-end;
    padding-bottom: 50px;
  }
}
</style>
