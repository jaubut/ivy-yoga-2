<template>
  <div class="ps ps-cta" style="background: var(--color-grey-90);">
    <div class="ps__wrap">
      <div class="ps__head">
        <p class="eye-brown">
          {{ eyeBrown }}
        </p>
        <div class="ps__header">
          <div class="ps__title" style="text-align: center;">
            <h1>{{ title }}</h1>
          </div>
        </div>
        <div class="ps__desc">
          <p>{{ description }}</p>
        </div>
        <a class="ps-button ps-button--primary margin-auto" target="_blank" :href="url">{{ label }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtaCenter',
  props: {
    url: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    eyeBrown: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
    .ps-cta {
        background: white !important;
    }
    .margin-auto {
        margin-left: auto;
        margin-right: auto;
        margin-top: var(--h-padding);
    }
    .eye-brown {
      color: var(--color--primary);
      font-size: xxx-large;
    }
</style>
