import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/jeremieaubut/GitHub/ivy-yoga-2/slices/${sliceName}.vue`), import(`/Users/jeremieaubut/GitHub/ivy-yoga-2/slices/${sliceName}/index.vue`), import(`/Users/jeremieaubut/GitHub/ivy-yoga-2/slices/${sliceName}/index.js`), import(`/Users/jeremieaubut/GitHub/ivy-yoga-2/slices/${sliceName}/${sliceName}.vue`),import(`vue-essential-slices/src/slices/${sliceName}.vue`), import(`vue-essential-slices/src/slices/${sliceName}/index.vue`), import(`vue-essential-slices/src/slices/${sliceName}/index.js`), import(`vue-essential-slices/src/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
