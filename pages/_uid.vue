<template>
  <slice-zone
    type="page"
    :uid="$route.params.uid"
    :theme="theme"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'

const theme = {
  AlternateGrid: {
    color: '#252525',
    eyebrow: {
      color: '#B2BA9E'
    }
  },
  CallToAction: {
    eyebrow: {
      color: '#B2BA9E'
    }
  }
}

export default {
  components: {
    SliceZone
  },
  data () {
    return {
      theme
    }
  }
}
</script>
