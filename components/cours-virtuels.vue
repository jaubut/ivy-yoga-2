<template>
  <div>
    <div class="container-text">
      <p class="eye-brown">
        {{ eyeBrown }}
      </p>
      <h1>Cours Virtuels</h1>
      <a href="https://clients.mindbodyonline.com/classic/ws?studioid=431828&stype=43&prodid=100068" target="_blank" class="ps-button ps-button--primary">30 $ le mois à la carte</a>
      <div class="ps__desc">
        <p>Accède à toutes les classes en ligne sur le <a target="_blank" href="https://www.facebook.com/groups/2350913745213806/">groupe Facebook privé: Ivy Yoga - Cours en Ligne</a>. Déjà inclus dans les passes illimitées en studio de 3, 6 &amp; 12 mois.</p>
      </div>
    </div>
    <div>
      <img src="/gif/dan.gif" alt="">
      <img src="/gif/marieanne.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursEnLigne'
}
</script>

<style>
.container-text {
    display: flex;
    height: fit-content;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: calc(100vw - var(--scrollbar));
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 8vw;
    text-align: center;
}
.eye-brown {
    color: var(--color--primary);
    font-size: xxx-large;
}
</style>
