import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _da75e56c = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _35bcd200 = () => interopDefault(import('../pages/a-propos.vue' /* webpackChunkName: "pages/a-propos" */))
const _f40782ae = () => interopDefault(import('../pages/classes.vue' /* webpackChunkName: "pages/classes" */))
const _4b1ca4ae = () => interopDefault(import('../pages/horaire.vue' /* webpackChunkName: "pages/horaire" */))
const _51036a04 = () => interopDefault(import('../pages/tarifs.vue' /* webpackChunkName: "pages/tarifs" */))
const _08b68fd6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _31e6fe9e = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _da75e56c,
    name: "prismic-preview"
  }, {
    path: "/a-propos",
    component: _35bcd200,
    name: "a-propos"
  }, {
    path: "/classes",
    component: _f40782ae,
    name: "classes"
  }, {
    path: "/horaire",
    component: _4b1ca4ae,
    name: "horaire"
  }, {
    path: "/tarifs",
    component: _51036a04,
    name: "tarifs"
  }, {
    path: "/",
    component: _08b68fd6,
    name: "index"
  }, {
    path: "/:uid",
    component: _31e6fe9e,
    name: "uid"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
