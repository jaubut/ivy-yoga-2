<template>
  <div>
    <div class="grid-filter">
      <p @click="mood = null">
        Tout
      </p>
      <p @click="mood = 'deposer'">
        Se déposer
      </p>
      <p @click="mood = 'activer'">
        S'activer
      </p>
      <p @click="mood = 'depasser'">
        Se dépasser
      </p>
    </div>
    <div class="grid">
      <section v-for="classe in orderClasses" :key="classe.title" class="grid-classe">
        <img :src="classe.img" alt="">
        <h1>{{ classe.title }}</h1>
        <p>{{ classe.description }}</p>
        <a class="ps-button ps-button--primary" href="https://mindbody.io/locations/ivy-espace-yoga-arts-communaute" target="_blank">Réserver</a>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const _ = require('lodash')

export default {
  components: {
  },
  data () {
    return {
      mood: null
    }
  },
  computed: {
    ...mapState({
      selectClasses: state => state.classes.classes
    }),
    orderClasses () {
      if (this.mood === null) {
        return this.selectClasses
      } else {
        return _.filter(this.selectClasses, { group: [this.mood] })
      }
    }
  }
}
</script>

<style>
.grid {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
.grid-classe {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    height: auto;
    max-width: 500px;
    padding: 50px;
    margin: 0;
}
.grid-filter {
  display: flex;
  flex-flow: row;
  padding: 15px 30vw;
  justify-content: space-around;
  align-items: center;
  background: var(--color-grey-90);
}
.grid-filter p {
  margin: 0;
  cursor: pointer;
}
.grid-filter p:hover {
  color: var(--color--primary);
}
@media (max-width: 1001px) {
  .grid-filter {
    padding: 15px;
  }
}
</style>
