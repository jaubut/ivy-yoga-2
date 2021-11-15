<template>
  <div>
    <hero-promo
      url="https://images.prismic.io/ivy-yoga/0e5d227e-6d0b-4eda-b1f8-feea573ac806_hero-1.jpg?auto=compress,format"
      title="Ton premier mois à 60 $"
      title2="Valide 1 fois par personne."
      description=""
      ctaurl="/tarifs"
      cta="Voir toutes les offres"
    />
    <slice-zone type="page" uid="accueil" />
    <classeJour />
    <section class="ps">
      <div class="ps__wrap">
        <div class="ps__head">
          <header class="ps__header">
            <span class="ps__kicker ">
              Témoignages
            </span>
            <div class="ps__title ">
              <h1>Qu'est-ce que l'on dit de Ivy</h1>
            </div>
          </header>
        </div>
        <client-only>
          <carousel :per-page-custom="[[200, 1], [1199, 2]]">
            <slide v-for="people in peoples" :key="people.name">
              <div class="temoignage-body">
                <img :src="people.photo" :alt="people.name">
                <h2>{{ people.name }}</h2>
                <p>{{ people.body }}</p>
              </div>
            </slide>
          </carousel>
        </client-only>
      </div>
    </section>
    <div id="a46376a6_1604082980" class="powr-instagram-feed" style="background: white;" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import heroPromo from '~/components/hero.vue'
import classeJour from '~/components/classe-du-jour'

export default {
  components: {
    SliceZone,
    heroPromo,
    classeJour
  },
  data () {
    return {
      peoples: [
        {
          name: 'Sonia Messier',
          body: 'Un endroit convivial, un accueil humain et chaleureux, un choix de cours intéressant et une approche novatrice et inspirante.',
          photo: 'https://images.prismic.io/ivy-yoga/a598ab9a-266a-490a-b3ef-4edf82bf523f_41688315_1117332848425482_3245234395019214848_n.jpg?auto=compress,format'
        },
        {
          name: 'Darko Popovic',
          body: 'J’adore les profs & la variété des cours, le prix est excellent et la vibe est belle. On ne peut demander mieux.',
          photo: 'https://images.prismic.io/ivy-yoga/9641b7ac-5a7a-485d-95d4-ac1b738a8bb6_68817355_1116438748554342_3954748866170978304_n.jpg?auto=compress,format'
        },
        {
          name: 'Julie Jacques',
          body: 'J’ai remercié mon collègue Antoine de m’avoir fait découvrir Ivy . Je te remercie Daniel car tu m’as permis d’apprivoiser le yoga. Je peux respecter mon rythme et mes limites sans me sentir jugée. Ça me fait un bien énorme et je vais tenter pendant mon voyage de faire quelques séances hebdomadaires.',
          photo: 'https://images.prismic.io/ivy-yoga/583dbbcd-6dab-4170-aec6-af1f1020b4c4_90625036_10220252220950083_7536738023233290240_n.jpg?auto=compress,format'
        },
        {
          name: 'Isa Romeo',
          body: "Merci pour tous les cours donnés depuis le début du confinement. Cela m'a permis de commencer le yoga dans le confort de mon foyer. Et en plus il y en a pour tous les niveaux.",
          photo: 'https://images.prismic.io/ivy-yoga/24b7cee1-4646-4001-bd26-6b017afec983_57502817_10219806570338657_7666133937478959104_n.jpg?auto=compress,format'
        }
      ]
    }
  }
}
</script>

<style scoped>
.temoignage-body {
  background: var(--color--secondary);
  border-radius: 8px;
  margin: 0.50em;
  display: grid;
  grid-template: 0.2fr 1fr 0.2fr/ 1fr 1fr 1fr;
  padding: 2rem;
}
.temoignage-body img {
  grid-area: 1/2/2/3;
  margin-bottom: 1.5rem;
  border-radius: 100%;
  max-height: 250px;
  width: 250px;
  align-self: center;
}
.temoignage-body h2 {
  grid-area: 3/3/4/4;
  text-align: right;
}
.temoignage-body p {
  grid-area: 2/1/3/4;
  text-align: center;
}
@media (max-width: 475px) {
  .temoignage-body {
    padding: 1rem;
  }
}
</style>
