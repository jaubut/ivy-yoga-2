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
      color: '#FAC8A2'
    }
  },
  CallToAction: {
    eyebrow: {
      color: 'pink'
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
