<template>
  <div>
    <hero-promo
      url="https://ivy-yoga.prismic.io/medias/?what=images&open=YHCA2BEAACIAFoO6"
      title="Réouverture le lundi 14 juin !"
      description="Du mouvement illimité durant 12 semaines pour seulement 170 $ (soit aussi peu que 14 $ environ la semaine) !"
      ctaurl="https://espaceivy.fliipapp.com/user/register/buy_membership/1/13142"
      cta="Me procurer l'offre"
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
