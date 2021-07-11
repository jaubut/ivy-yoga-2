<template>
  <div class="section-photo-text">
    <img :src="'/horaire/' + currentDate + '.png'" alt="">
    <!--
    <img src="https://images.prismic.io/ivy-yoga/7aec5fc1-10bf-45de-a202-7a94637f4045_Animated+GIF-downsized_large+%281%29.gif?auto=compress,format" alt="">
    -->
    <div>
      <h3 class="toCapitalFirst">
        {{ currentDate }}
      </h3>
      <!--
      <h3>Une centaine de cours disponible en tout temps !</h3>
      <p>Accède à une centaines de classes en ligne dès maintenant pour seulement <strong><a href="https://clients.mindbodyonline.com/classic/ws?studioid=431828&stype=43&prodid=100068" target="_blank">30 $ pour 1 mois!</a></strong></p>

      <p><img height="auto" width="25px" src="https://images.prismic.io/ivy-yoga/df016b1b-8224-43b4-ad66-8ee263f61487_camera.png?auto=compress,format" alt="">  Cours en studio et aussi diffusé en <a href="https://www.facebook.com/groups/2350913745213806/" target="_blank">ligne</a>.</p>
      -->
      <p>Des cours chaque jour avec une capacité de 25 personnes par classe. <a href="https://espaceivy.fliipapp.com/horaire" target="_blank">Réserve dès maintenant via Fliip.</a></p>
      <a class="ps-button ps-button--primary" href="https://espaceivy.fliipapp.com/horaire" target="_blank">Réserve tes classes</a>
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
    justify-content: space-evenly;
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
