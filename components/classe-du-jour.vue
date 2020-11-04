<template>
  <div class="section-photo-text">
    <img :src="'/horaire/' + currentDate + '.png'" alt="">
    <div>
      <p class="toCapitalFirst">
        {{ currentDate }}
      </p>
      <h3>Nos classes aujourd'hui</h3>
      <p>Si tu n'as pas d'abonnement, tu vas pouvoir en choisir un lors de ta réservation.</p>
      <p><img height="auto" width="25px" src="https://images.prismic.io/ivy-yoga/df016b1b-8224-43b4-ad66-8ee263f61487_camera.png?auto=compress,format" alt="">  Cours en studio et aussi diffusé en <a href="https://www.facebook.com/groups/2350913745213806/" target="_blank">ligne</a>.</p>
      <a class="ps-button ps-button--primary" href="https://mindbody.io/locations/ivy-espace-yoga-arts-communaute" target="_blank">Réserver</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentDate () {
      const today = new Date()
      return today.toLocaleString('fr-ca', { weekday: 'long' })
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
