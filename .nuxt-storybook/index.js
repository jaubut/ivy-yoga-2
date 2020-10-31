import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_smresolver_352910a9 from 'nuxt_plugin_smresolver_352910a9' // Source: ./prismic/sm-resolver.js (mode: 'all')
import nuxt_plugin_prismic_4a7ba3b6 from 'nuxt_plugin_prismic_4a7ba3b6' // Source: ./prismic/plugins/prismic.js (mode: 'all')
import nuxt_plugin_prismiccomponents_67d8be16 from 'nuxt_plugin_prismiccomponents_67d8be16' // Source: ./prismic/plugins/prismic-components.js (mode: 'all')
import nuxt_plugin_prismicpreview_f142c6b6 from 'nuxt_plugin_prismicpreview_f142c6b6' // Source: ./prismic/middleware/prismic_preview.js (mode: 'all')
import nuxt_plugin_workbox_ede95fd8 from 'nuxt_plugin_workbox_ede95fd8' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_meta_2bc97966 from 'nuxt_plugin_meta_2bc97966' // Source: ./pwa/meta.js (mode: 'all')
import nuxt_plugin_icons_3c61fb89 from 'nuxt_plugin_icons_3c61fb89' // Source: ./pwa/icons.js (mode: 'all')
import nuxt_plugin_axios_5ba538f8 from 'nuxt_plugin_axios_5ba538f8' // Source: ./axios.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"ivy-yoga","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Créateur de Valeur et de Mouvement Ivy Yoga est à la fois un Studio de Yoga, un Espace Locatif pour réaliser tes projets et une Galerie d’Art situé dans un grand loft industriel lumineux niché dans l’immeuble Impérial à Granby classé patrimoine culturel du Québec."}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"src":"https:\u002F\u002Fcdn.polyfill.io\u002Fv2\u002Fpolyfill.min.js?features=Element.prototype.classList"},{"src":"https:\u002F\u002Fkit.fontawesome.com\u002Fe007d1f7cc.js"},{"src":"https:\u002F\u002Fwww.powr.io\u002Fpowr.js?platform=vuejs"},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Ffocus-visible@5.0.2\u002Fdist\u002Ffocus-visible.min.js"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_smresolver_352910a9 === 'function') {
    await nuxt_plugin_smresolver_352910a9(app.context, inject)
  }

  if (typeof nuxt_plugin_prismic_4a7ba3b6 === 'function') {
    await nuxt_plugin_prismic_4a7ba3b6(app.context, inject)
  }

  if (typeof nuxt_plugin_prismiccomponents_67d8be16 === 'function') {
    await nuxt_plugin_prismiccomponents_67d8be16(app.context, inject)
  }

  if (typeof nuxt_plugin_prismicpreview_f142c6b6 === 'function') {
    await nuxt_plugin_prismicpreview_f142c6b6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_ede95fd8 === 'function') {
    await nuxt_plugin_workbox_ede95fd8(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_2bc97966 === 'function') {
    await nuxt_plugin_meta_2bc97966(app.context, inject)
  }

  if (typeof nuxt_plugin_icons_3c61fb89 === 'function') {
    await nuxt_plugin_icons_3c61fb89(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5ba538f8 === 'function') {
    await nuxt_plugin_axios_5ba538f8(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
