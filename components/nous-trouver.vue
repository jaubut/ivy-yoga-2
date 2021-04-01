<template>
  <div class="section-map-text">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2801.622621215749!2d-72.7295404!3d45.3967829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9cf185dab8e83%3A0x9ea453ef9f37abd5!2sIvy%20Yoga!5e0!3m2!1sen!2sca!4v1603674750176!5m2!1sen!2sca"
      width="auto"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
      class="map-ivy"
    />
    <div>
      <a class="link" href="https://www.google.com/maps/place/Ivy+Space+Yoga+-+Arts+%26+Community/@45.396964,-72.7283581,18z/data=!4m19!1m13!4m12!1m4!2m2!1d-72.7268652!2d45.3966786!4e1!1m6!1m2!1s0x4cc9cf185dab8e83:0x9ea453ef9f37abd5!2sivy+yoga+granby!2m2!1d-72.7273537!2d45.3967828!3m4!1s0x4cc9cf185dab8e83:0x9ea453ef9f37abd5!8m2!3d45.3967828!4d-72.7273537">166 Rue Cowie #108, Granby, QC J2G 3V5</a>
      <h3>Nous trouver</h3>
      <p>Réouvert en zone orange pour des cours semi-privés ! Capacité limitée de 8 personnes par classe. Assure-toi d'avoir réservé ta classe avant de te présenter.</p>
      <a class="ps-button ps-button--primary" href="https://espaceivy.fliipapp.com/" target="_blank">Réserver</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.section-map-text {
    display: flex;
    flex-flow: row-reverse wrap;
    height: fit-content;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 15px;
    background: white;
}
.section-map-text div {
    max-width: 750px;
}
.section-map-text div p {
  font-size: calc(1rem * var(--text-min-xl));
  max-width: 500px;
  margin-bottom: 15px;
}
.section-map-text link {
    font-size: calc(1rem * var(--text-min-xl));
    font-weight: normal;
}
.section-map-text div h3 {
  font-size: calc(calc(1rem * var(--text-min-4xl)) + (var(--text-max-4xl) - var(--text-min-4xl)) * (100vw - 40rem) / (80 - 40));
  margin-bottom: 0;
}
.map-ivy {
    width: 50vw;
}
@media (max-width: 875px) {
    .section-map-text {
        flex-flow: column-reverse wrap;
        padding: 32px 20px;
    }
    .section-map-text div {
        padding-bottom: 25px;
    }
    .map-ivy {
        width: auto;
    }
}
</style>
