<template>
  <div class="section-photo-text">
    <img :src="'/horaire/' + today + '.png'" alt="">
    <div>
      <p class="toCapitalFirst">
        {{ today }}
      </p>
      <h3>Nos classes aujourd'hui</h3>
      <p>Si tu n'as pas d'abonnement, tu vas pouvoir en choisir un lors de ta réservation.</p>
      <a class="ps-button ps-button--primary" href="https://mindbody.io/locations/ivy-espace-yoga-arts-communaute" target="_blank">Réserver</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    today: {
      type: String,
      default: 'lundi'
    }
  }

}
</script>

<style>
.section-photo-text {
    display: flex;
    flex-flow: row wrap;
    height: fit-content;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background: #a8a19627;
}
.section-photo-text img {
    max-height: 500px;
}
.section-photo-text div {
    max-width: 750px;
}
.section-photo-text div p {
  font-size: calc(1rem * var(--text-min-xl));
  max-width: 500px;
  margin-bottom: 15px;
}
.section-photo-text div h3 {
  font-size: calc(calc(1rem * var(--text-min-4xl)) + (var(--text-max-4xl) - var(--text-min-4xl)) * (100vw - 40rem) / (80 - 40));
  margin-bottom: 0;
}
.toCapitalFirst {
  text-transform: capitalize;
}
@media (max-width: 875px) {
    .section-photo-text {
        flex-flow: column-reverse wrap;
        padding: 32px 20px;
    }
}
</style>
