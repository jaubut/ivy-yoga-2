<template>
  <div>
    <header-prismic />
    <nuxt />
    <map-ivy />
    <footer-prismic />
  </div>
</template>

<script>
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import FooterPrismic from '~/components/FooterPrismic.vue'
import mapIvy from '~/components/nous-trouver.vue'

export default {
  components: {
    HeaderPrismic,
    FooterPrismic,
    mapIvy
  },
  head () {
    return {
      title: 'Ivy Yoga'
    }
  },
  // Called before rendering the layout (even for error page)
  async middleware ({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: calc(1rem * var(--text-min-xl));
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #252525;
}
a {
  color: #252525;
}
a:visited {
  color: #252525;
}
h3 {
  font-size: 4rem;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #B2BA9E;
  color: #B2BA9E;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #B2BA9E;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #B2BA9E;
  color: #B2BA9E;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #B2BA9E;
}
.ps__kicker {
  color: #B2BA9E;
}
.submit-button {
  margin: 25px 0;
  padding: 0.25em 1.5em;
  font-size: calc(1rem * var(--text-min-2xl));
  font-weight: bold;
  background: #B2BA9E;
  color: #252525;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
}
.submit-button:hover {
  color: #252525;
  background: #7d8370;
}
.fade-enter-active, .fade-leave-active, body .fade-enter-active, body .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to, body .fade-enter, body .fade-leave-to {
  opacity: 0;
}
</style>
