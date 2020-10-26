<template>
  <div>
    <header class="site-header">
      <p v-if="$store.state.menu === 'Please create a menu document'" class="logo">
        {{ $store.state.menu }}
      </p>
      <nuxt-link to="/" class="logo">
        <prismic-image :field="$store.state.menu.logo" />
        {{ $prismic.asText($store.state.menu.title) }}
      </nuxt-link>
      <nav>
        <ul>
          <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
            <prismic-link :field="menuLink.link" :style="'color:' + menuLink.color +';'">
              {{ $prismic.asText(menuLink.label) }}
            </prismic-link>
          </li>
        </ul>
      </nav>
      <p v-if="menu === false" @click="menu = !menu">
        menu
      </p>
      <p v-else @click="menu = !menu">
        X
      </p>
    </header>
    <transition name="fade">
      <div v-if="menu === true" class="menu-mobile" @click="menu = !menu">
        <nav>
          <ul>
            <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
              <prismic-link :field="menuLink.link" :style="'color:' + menuLink.color +';'">
                {{ $prismic.asText(menuLink.label) }}
              </prismic-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderPrismic',
  data () {
    return {
      menu: false
    }
  }
}
</script>

<style scoped>
.site-header {
    width: auto;
    padding: 15px 25px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.5);
}
.logo img {
    width: 150px;
}
.site-header nav {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
}

.site-header nav ul {
    display: flex;
    flex-flow: row;
}
nav ul li {
    color: black;
    list-style-type: none;
}
nav ul li a {
    color: black;
    padding: 0 2.5vw;
    text-decoration: none;
}
nav ul li a:hover {
    color: rgb(250, 200, 162);
    transition: 0.5s;
}
.site-header p {
  display: none;
  margin: 0;
  color: rgb(250, 200, 162);
  font-weight: bold;
}
@media (max-width: 1001px) {
  .site-header nav {
    display: none;
  }
  .logo img {
    width: 100px;
  }
  .site-header {
    padding: 1.25rem;
  }
  .site-header p {
    display: inline;
  }
  .menu-mobile {
    height: 100vh;
    width: 100vw;
    padding: 25px;
    background: white;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    transition: 0.5s;
    animation: ease-in-out;
  }
  .menu-mobile nav ul li a {
    font-size: calc(1rem * var(--text-min-4xl));
    line-height: 5rem;
  }
}
</style>
