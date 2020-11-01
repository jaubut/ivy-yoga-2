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
  transition: 'home',
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
:root {
    --primary-hue: 78;
    --secondary-hue: 42;
    --color--primary: hsl(var(--primary-hue), 17%, 68%);
    --color--secondary: hsl(var(--secondary-hue), 19%, 84%);
    --color--primary--dark: hsl(var(--primary-hue), 8%, 48%);
    --color--primary--darker: hsl(var(--primary-hue), 8%, 21%);
    --color-grey-0: hsl(0, 0%, 0%);
    --color-grey-20: hsl(0, 0%, 20%);
    --color-grey-90: hsl(0, 0%, 95%);
    --color-grey-53: hsl(0, 0%, 53%);
    --color-text-grey: var(--color-grey-53);
    --color-pink: hsl(26, 95%, 81%);
    --color-sand: hsl(49, 19%, 84%);
    --color-beige: hsl(34, 34%, 75%);
    --color-rose: hsl(346, 25%, 66%);
    --color-terre: hsl(35, 16%, 62%);
    --color-vert-fonce: hsl(34, 9%, 62%);
    --color-blue: hsl(205, 18%, 53%);
    --color-black: hsl(21, 4%, 15%);
    --color-green: hsl(78, 17%, 68%);
    --color-orange: hsl(24, 42%, 56%);
    --color-lila: hsl(328, 9%, 62%);
    --v-margin: 1rem;
}
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
h3 {
  font-size: 4rem;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.ps {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.ps-alternate__modules {
  flex-flow: row wrap;
}
.ps-button--secondary {
  margin-right: auto;
  margin-left: auto;
}
.ps-button {
  max-width: fit-content;
}
.ps__kicker {
  color: var(--color--primary);
  font-size: xxx-large;
  margin: 0;
}
.submit-button {
  margin: 25px 0;
  padding: 0.25em 1.5em;
  font-size: calc(1rem * var(--text-min-2xl));
  font-weight: bold;
  background: var(--color--primary);
  color: #252525;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
}
.submit-button:hover {
  color: #252525;
  background: var(--color--primary--dark);
}
.ps-alternate__modules {
  display: flex;
  align-content: flex-start;
}
.fade-enter-active, .fade-leave-active, body .fade-enter-active, body .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to, body .fade-enter, body .fade-leave-to {
  opacity: 0;
}
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
